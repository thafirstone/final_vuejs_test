const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  'BUY_STOCK' (state, { stockId, stockPrice, quantity }) {
    const record = state.stocks.find(element => element.id === stockId)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCK' (state, { stockId, stockPrice, quantity }) {
    const record = state.stocks.find(element => element.id === stockId)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
  },
  'UPDATE_FUNDS_STOCKS' (state, { funds, portofolioStocks }) {
    state.funds = funds
    state.stocks = portofolioStocks
  }
}

const actions = {
  sellStock: ({ commit }, order) => {
    commit('SELL_STOCK', order)
  },
  updateFundsStocks: ({ commit }, value) => {
    commit('UPDATE_FUNDS_STOCKS', value)
  }
}

const getters = {
  funds: state => {
    return state.funds
  },
  portofolioStocks: (state, getters) => {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id)
      return { id: stock.id, quantity: stock.quantity, name: record.name, price: record.price }
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
