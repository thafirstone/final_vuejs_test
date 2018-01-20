<template>
  <div>
    <h3>Portofolio  Stock</h3>
    <div class="row">
      <app-stock v-for="(stock,i) in stocks" :key="i" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from './Stock'
import { mapGetters } from 'vuex'

export default {
  computed: {
    // stocks: {
    //   get () {
    //     return this.$store.getters.stocks
    //   }
    // },
    // stocks () {
    //   return this.$store.getters.stocks
    // },
    // ...mapActions([
    //   'initStocks'
    // ]),
    ...mapGetters({
      'stocks': 'portofolioStocks'
    })
  },
  components: {
    appStock: Stock
  }
}

</script>
