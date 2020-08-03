<template>
  <div class="mt-5">
    <loading :active.sync="isLoading"></loading>
    <h2>這是狗屋車</h2>
    <hr class="my-5">
    <div>
      <!-- <h2><router-link to="/checkout">去結帳</router-link></h2> -->
      <button @click.prevent="goCheckout" type="button" class="btn btn-primary">去結帳</button>
    </div>
  </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  data () {
    return {
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  },
  methods: {
    goCheckout () {
      this.$router.push('/checkout')
    }
  }
}
</script>
