import warnings_zh from "./zh_TW.js";

// 註冊全域的表單驗證元件（ValidationProvider、ValidationObserver）
// 將 VeeValidate input 驗證工具載入 作為全域註冊
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);

// 將 VeeValidate 完整表單 驗證工具載入 作為全域註冊
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);

VeeValidate.configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
});

// 載入自訂規則包
VeeValidate.localize('tw', warnings_zh);

// 載入loading套件
Vue.use(VueLoading);
Vue.component('loading', VueLoading)

new Vue({
  el: '#app',
  data: {
    apiPath: 'https://course-ec-api.hexschool.io/api',
    uuid: 'e1cc6621-b499-451f-b344-2f88e86ce3d8',
    form: {
      name: '',
      email: '',
      tel: '',
      address: '',
      payment: '',
      notes: '',
      message:'',
    },
    isLoading: false,
    cart: {},

  },
  methods: {
    submitForm() {
      this.isLoading = true;    // loading
      var api = `${this.apiPath}/${this.uuid}/ec/orders`;   // Frontend 前台 - Create order. 新增一筆訂單。

      var tempOrder = Object.assign({}, this.form);   // 訂單頁面表單 淺層複製

      axios.post(api, tempOrder)
        .then( (response) => {
          console.log(response);
          this.isLoading = false;
        })
        .catch( (error) => {
          this.isLoading = false;
          console.log(error);
        });

      
    },
  },
});