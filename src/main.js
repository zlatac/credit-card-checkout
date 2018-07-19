import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import checkoutPage from './components/checkoutPage.vue';
import paymentCard from './components/paymentCard.vue';
import paymentSuccess from './components/paymentSuccess.vue';
import productCard from './components/productCard.vue';
import productDetail from './components/productDetail.vue';
import spinner from './components/spinner.vue';
import vInput from './components/vInput.vue';
import vSelect from './components/vSelect.vue';

Vue.use(VeeValidate); // validation plugin
Vue.component('checkoutPage',checkoutPage)
Vue.component('paymentCard',paymentCard)
Vue.component('paymentSuccess',paymentSuccess)
Vue.component('productCard',productCard)
Vue.component('productDetail',productDetail)
Vue.component('spinner',spinner)
Vue.component('vInput',vInput)
Vue.component('vSelect',vSelect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
