<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" tag="a" class="navbar-brand">Stock Trader</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link tag="a" active-class="active" :to="{name: 'portofolio'}" class="nav-link">Portofolio</router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" active-class="active" :to="{name: 'stocks'}" class="nav-link">Stocks</router-link>
        </li>
      </ul>
      <ul class="navbar-nav navbar-right">
        <li class="nav-item">
          <a href="#" @click.prevent="endDay" class="nav-link">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu"  aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click.prevent="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click.prevent="loadData">Load Data</a>
          </div>
        </li>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{funds |currency}}</strong>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['funds'])
  },
  methods: {
    ...mapActions(['randomizeStocks', 'updateFundsStocks', 'updateStocks']),
    endDay () {
      this.randomizeStocks()
    },
    saveData () {
      const data = {
        funds: this.$store.getters.funds,
        portofolioStocks: this.$store.getters.portofolioStocks,
        stocks: this.$store.getters.stocks
      }
      console.log(data)
      this.$http.put('data.json', data)
        .then((response) => {
          console.log(response.json())
        }, (err) => {
          console.log(err)
        })
    },
    loadData () {
      this.$http.get('data.json')
        .then((response) => {
          const data = response.json()
          if (data) {
            console.log(data)
            this.updateFundsStocks(data)
            this.updateStocks(data)
          }
        }, (err) => {
          console.log(err)
        })
    }
  }
}
</script>
