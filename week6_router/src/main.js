import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap' // Import js file
import 'bootstrap/dist/css/bootstrap.min.css' // Import css file

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Loading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
