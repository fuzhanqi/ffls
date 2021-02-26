import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Header from './components/Header.vue'//把头引入
import Footer from './components/Footer.vue'//把脚引入
import axios from 'axios'

axios.defaults.baseURL = '/api'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component("my-header", Header)//把头做成全局的组件
Vue.component("my-footer", Footer)//把脚做成全局的组件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
