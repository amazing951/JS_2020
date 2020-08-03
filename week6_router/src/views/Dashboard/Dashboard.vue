<template>
  <div>
    <div class="container my-5">
      <h2>這是 後台 管理葉面</h2>
      <router-link to="/">回到前台</router-link> |
      <router-link to="/admin">後台首頁</router-link> |
      <router-link to="/admin/products">產品頁</router-link> |
      <router-link to="/admin/coupons">酷碰</router-link> |
      <router-link to="/admin/orders">訂單列表</router-link>
    </div>
    <!-- props, 跑非同步，adminSecuss驗證沒問題，才跑下面 -->
    <router-view :token="token" v-if="adminSecuss" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: '',
      adminSecuss: false
    }
  },
  methods: {
    checkAdmin () {
      // 取得 token 的 cookies
      // 詳情請見：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
      // 因為要驗證，帶入token (注意前綴 Bearer)
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      const api = `${process.env.VUE_APP_APIPATH}/auth/check`
      this.$http.post(api, {
        api_token: this.token
      })
        .then((res) => {
          // console.log(res)
          this.adminSecuss = true
        })
        .catch(() => {
          // console.log(error)
          this.$router.push('/login')
        })
    }
  },
  created () {
    this.checkAdmin()
  }
}
</script>
