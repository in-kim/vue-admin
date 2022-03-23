import Vue from 'vue'
import AppLayout from './layout/index.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
import './scss/index.scss'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  name:'root',
  router,
  store,
  render: h => h(AppLayout),
}).$mount('#app')
