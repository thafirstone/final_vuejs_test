import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Portofolio from '@/components/portofolio/Portofolio'
import Stocks from '@/components/stocks/Stocks'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'portofolio',
      path: '/portofolio',
      component: Portofolio
    },
    {
      name: 'stocks',
      path: '/stocks',
      component: Stocks
    }
  ],
  mode: 'history'
})
