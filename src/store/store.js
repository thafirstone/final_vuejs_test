import Vue from 'vue'
import Vuex from 'vuex'
import StockStore from './modules/stocks.store'
import PortofolioStore from './modules/portofolio.store'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    StockStore,
    PortofolioStore
  }
})
export default store
