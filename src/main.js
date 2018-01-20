// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import Router from './routes'
import Store from './store/store'

/* Http config */
Vue.use(VueResource)
Vue.http.options.root = 'https://stock-trader-ds.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
  next(response => {
    response.json = () => response.body
  })
})
/* Dev or Prod */
Vue.config.productionTip = false

/* Filters */
Vue.filter('currency', (value) => {
  return `${value.toLocaleString()} Fcfa`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  store: Store,
  components: { App },
  template: '<App/>'
})
