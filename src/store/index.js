import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({ 
  state() {
    return {
      items: [],
      loading:false,
      data: [],
    }
  },
  mutations: {

    setLoading(state, loading) {
      state.loading = loading;
    },
    setData(state, data) {
      console.log("data state", data)
      state.data = data;
    },

    SET_ITEMS(state, items) {
      state.items = items
    },
    ADD_ITEM(state, item) {
      state.items.push(item)
    },
    UPDATE_ITEM(state, updatedItem) {
      const index = state.items.findIndex(item => item.id === updatedItem.id)
      if (index !== -1) {
        state.items[index] = updatedItem
      }
    },
    DELETE_ITEM(state, itemId) {
      state.items = state.items.filter(item => item.id !== itemId)
    }
  },
  actions: {
    fetchItems({ commit }) {
      const items = [
      ]
      commit('SET_ITEMS', items)
    },
    createItem({ commit }, item) {
        console.log("store item", item)
      item.id = Date.now() 
      commit('ADD_ITEM', item)
    },
    updateItem({ commit }, updatedItem) {
      commit('UPDATE_ITEM', updatedItem)
    },
    deleteItem({ commit }, itemId) {
      commit('DELETE_ITEM', itemId)
    },

    //// get the data from api
    async fetchData({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get('https://dummyjson.com/products');
        console.log("response1111", response.data.products)
        commit('setData', response.data.products);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    }


  }

})

export default store
