<template>
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
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}/auth/login`
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
