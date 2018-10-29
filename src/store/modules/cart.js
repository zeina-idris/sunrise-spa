import gql from 'graphql-tag';
import apolloProvider from '@/apollo';

const SET_CART = 'SET_CART';

const cartFragment = gql`
  fragment CartData on Cart {
    id
    lineItems {
        name(locale: $locale),
        quantity,
      },
  }
`;

const draft = {
  currency: 'EUR',
  lineItems: [
    {
      sku: 'M0E20000000FEM5',
      quantity: 1,
    },
    {
      sku: 'A0E200000001Z0V',
      quantity: 1,
    },
  ],
};

export default {
  state: {
    cart: { },
  },

  getters: {
    currentCart: state => state.cart,
  },

  actions: {
    createCart: ({ commit, state }) => {
      console.log(state.cart.id);
      if (typeof state.cart.id === 'undefined') {
        apolloProvider.defaultClient.setAnonymousSession();
        apolloProvider.defaultClient.mutate({
          mutation: gql`
          mutation cart($draft: MyCartDraft!, $locale: Locale!) {
            createMyCart(draft: $draft) {
                ...CartData
            }
          }
          ${cartFragment}`,
          variables: {
            draft,
            // todo: this.$i18n.locale is not working. figure out why not...
            locale: 'en',
          },
        }).then((response) => {
          commit(SET_CART, response.data.createMyCart);
        });
      }
    },
    loadFromlocalStorage: ({ state }) => {
      // todo: load cart if stored in localstorage, verify token usage.
      if (typeof state.cart.id === 'undefined' && localStorage.cartId) {
        console.log(localStorage.cartId);
      }
    },
  },
  mutations: {
    [SET_CART](state, cart) {
      console.log(cart);
      state.cart = cart;
      localStorage.cartId = cart.id;
    },
  },
};
