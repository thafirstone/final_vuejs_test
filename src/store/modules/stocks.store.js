import StockData from './../../data/stocks.data'
const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(element => {
      element.price = Math.round(element.price * (1 + Math.random() - 0.5))
    })
  }
}

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order)
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', StockData)
  },
  updateStocks: ({ commit }, { stocks }) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS')
  }
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
