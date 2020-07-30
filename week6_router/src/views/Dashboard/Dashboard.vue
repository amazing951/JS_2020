<template>
  <div>
    <div>
      <h2>這是 後台 管理葉面</h2>
      <router-link to="/">回到前台</router-link> |
      <router-link to="/admin">後台首頁</router-link> |
      <router-link to="/admin/coupons">酷碰</router-link> |
    </div>
    <router-view />
  </div>
</template>
