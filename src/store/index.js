import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],    
    filter: {
      query: ''
    }
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data
    },
    SET_QUERY(state, query) {
      state.filter.query = query;
    },
    RESET_FILTER(state) {
      state.filter.query = null
    },
  },
  getters: {
    filteredData(state) {
      let data = state.data
      if (state.filter.query) {
        if (state.filter.query.length > 1) {
          data = data.filter(data => data.producto.includes(state.filter.query.toUpperCase()) || data.registrosanitario.includes(state.filter.query.toUpperCase()));
        }
      }
      return data
    },
    getQuery(state) {
      return state.filter.query;
    }
  },
  actions: {
    async fetchData(context) {
      const response = await axios.get(`https://www.datos.gov.co/resource/i7cb-raxc.json?$limit=100`)
      const data = response.data
      return context.commit('SET_DATA', data)
    }
  }
})
