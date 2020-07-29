<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <h2>這是單一產品列表</h2>
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
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
      product: {},
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  },
  created () {
    this.isLoading = true
    // console.log(this.$route)
    var id = this.$route.params.id
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        // console.log(res)
        this.product = res.data.data
        this.isLoading = false
      })
  }
}
</script>
