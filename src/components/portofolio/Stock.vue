<template>
  <div class="col-sm-6 col-md-4">
    <div class="card border-primary mb-3">
      <div class="card-header text-white bg-primary">{{stock.name}} (Price: {{stock.price |currency}} | Quantity: {{ stock.quantity }})</div>
      <div class="card-body text-primary">
        <h5 class="card-title align-baseline">{{stock.name}}</h5>
        <!-- <p class="card-text"></p> -->
        <div>
          <input v-model.number="quantity" type="number" class="card-text" placeholder="Quantity">
          <button @click="sellStock" :disabled="checkQuantity()" class="btn text-right" :class="{'btn-primary': !insufficientQuantity, 'btn-danger': insufficientQuantity}">{{ insufficientQuantity ? 'No quantity' : 'Sell' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex'

export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      'eventSellStock': 'sellStock'
    }),
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.eventSellStock(order)
      this.quantity = 0
    },
    checkQuantity () {
      return (this.quantity <= 0 || this.insufficientQuantity)
    }
  },
  computed: {
    insufficientQuantity () {
      return (this.quantity > this.stock.quantity)
    }
  }
}
</script>
