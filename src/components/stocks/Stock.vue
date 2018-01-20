<template>
  <div class="col-sm-6 col-md-4">
    <div class="card border-success mb-3">
      <div class="card-header text-white bg-success">{{stock.name}} (Price: {{stock.price |currency}})</div>
      <div class="card-body text-success">
        <h5 class="card-title align-baseline">{{stock.name}}</h5>
        <!-- <p class="card-text"></p> -->
        <div>
          <input v-model.number="quantity" type="number" class="card-text" :class="{'danger': insufficientFunds}" placeholder="Quantity">
          <button @click="buyStock" :disabled="checkQuantity()" class="btn text-right" :class="{'btn-success': !insufficientFunds, 'btn-danger': insufficientFunds}">{{ insufficientFunds ? 'No money' : 'Buy' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    },
    checkQuantity () {
      return ((this.quantity <= 0) || this.insufficientFunds)
    }
  },
  computed: {
    ...mapGetters(['funds']),
    insufficientFunds () {
      return ((this.quantity * this.stock.price) > this.funds)
    }
  }
}
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
