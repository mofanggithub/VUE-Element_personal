import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import header from './components/header'
import footer from './components/footer'
import Axios from 'axios'

Vue.use(ElementUI);
Vue.use(Vuex);

Vue.prototype.$axios = Axios;
Vue.component('headerVue', header)
Vue.component('footerVue', footer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
