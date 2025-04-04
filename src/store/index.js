import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: []
  },
  getters: {
    cartItems: (state) => state.cartItems,
    totalPrice: (state) => {
      return state.cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    }
  },
  mutations: {
    addToCart(state, product) {
      const item = state.cartItems.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
    },
    incrementQuantity(state, item) {
      item.quantity++;
    },
    decrementQuantity(state, item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    }
  }
});
