<template>
  <div>
    <h2>這是首頁</h2>
    <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">前台產品葉面</router-link> |
      <router-link to="/cart">狗屋車</router-link> |
      <router-link to="/admin">後台葉面</router-link>
      <router-view />
  </div>
</template>

<script>

</script>
