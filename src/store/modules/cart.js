import gql from 'graphql-tag';
import apolloProvider from '@/apollo';

const SET_INFO = 'SET_INFO';

export default {
  state: {
    info: null,
  },

  getters: {
    cart: state => state.info || {},
  },

  actions: {
    createCart: ({ commit }, draft) =>
      apolloProvider.defaultClient.mutate({
        mutation: gql`
          mutation createMyCart($draft: MyCartDraft!, $locale: Locale) {
            createMyCart(draft: $draft) {
              version
              lineItems {
                name(locale: $locale)
                price {
                  value
                }
              }
            }
          }`,
        variables: { draft },
      }).then((response) => {
        commit(SET_INFO, response.data.createMyCart.createMyCart);
      }),
  },

  mutations: {
    [SET_INFO](state, cart) {
      state.info = cart;
    },
  },
};
