import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
import axios from 'axios'
// 1.全局引用

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

axios.defaults.headers.post["Content-type"]="application/json";
Vue.prototype.$http = axios
axios.defaults.baseURL="http://localhost:80/mi/"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
