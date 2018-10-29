import Vue from 'vue';
import Vuex from 'vuex';
import categories from '@/store/modules/categories';
import user from '@/store/modules/user';
import cart from '@/store/modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    categories,
    user,
    cart,
  },

  state: {
    country: 'de-DE',
  },

  getters: {

  },

  actions: {

  },

  mutations: {

  },
});
