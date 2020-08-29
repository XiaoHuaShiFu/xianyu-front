import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import Http from './service/Http'
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$Http = Http
new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')
