import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首頁',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'products',
        name: '前台產品頁',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'about',
        name: '關於',
        component: () => import('../views/About.vue')
      },
      { // 動態路由
        path: 'product/:id',
        name: '前台單一產品頁',
        component: () => import('../views/Product.vue')
      },
      {
        path: 'cart',
        name: '購物車頁',
        component: () => import('../views/Cart.vue')
      },
      {
        path: 'checkout',
        name: '結帳',
        component: () => import('../views/Checkout.vue')
      },
      {
        path: 'login',
        name: '登入頁',
        component: () => import('../views/Login.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '後台產品頁',
        component: () => import('../views/Dashboard/BackEndProducts.vue')
      },
      {
        path: 'coupons',
        name: '後台酷碰',
        component: () => import('../views/Dashboard/Coupons.vue')
      },
      {
        path: 'orders',
        name: '後台訂單',
        component: () => import('../views/Dashboard/OrderList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
