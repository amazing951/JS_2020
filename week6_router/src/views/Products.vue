<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <h2>這是產品列表</h2>
    <table>
      <thead>
        <td>產品名稱</td>
        <td>產品原價</td>
        <td>詳細資訊</td>
      </thead>
      <!-- v-for跑產品 -->
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.origin_price }}</td>
        <td>
          <router-link :to="`/product/${item.id}`">點我看更多</router-link>
        </td>
      </tr>
    </table>
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
      products: [],
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  },
  created () {
    this.isLoading = true
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        // console.log(res)
        this.products = res.data.data
        this.isLoading = false
      })
  }
}
</script>
