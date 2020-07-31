<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container mt-5">
      <form class="formSignin" @submit.prevent="signin">
        <h2 class="mb-3">請登入</h2>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="user.email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="user.password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
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
      user: {
        email: '',
        password: ''
      },
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  },
  methods: {
    signin () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/auth/login` // 登入ㄉapi
      this.$http.post(api, this.user) // 發送請求，把this.user資料傳進去
        .then((res) => {
          // console.log(res)
          const hexToken = res.data.token // 登入token, 到期時間 存下來
          const hexExpire = res.data.expired
          document.cookie = `token = ${hexToken}; expires = ${new Date(hexExpire * 1000)}; path=/` // 存到cookie去
          this.$router.push('/admin')
          this.isLoading = false
        })
        .catch((error) => {
          console.log(error)
          this.isLoading = false
        })
    }
  }
}
</script>

<style>
  .formSignin{
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
</style>
