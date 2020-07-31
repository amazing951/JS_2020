<template>
  <div>
    <h2>這是 後台 產品列表</h2>
    <table>
      <thead>
        <td>產品名稱</td>
        <td>產品原價</td>
        <td>是否啟用</td>
      </thead>
      <!-- v-for跑產品 -->
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.origin_price }}</td>
        <td>{{ item.enabled }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  props: ['token'],
  created () {
    // 用props接收由外層元件Dashboard的資料，所以這邊不需再次驗證token
    // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
    const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products`
    this.$http.get(api)
      .then((res) => {
        // console.log(res)
        this.products = res.data.data
      })
  }
}
</script>
