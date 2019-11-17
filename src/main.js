import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueLodash from 'vue-lodash'

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(VueLodash) // options is optional

new Vue({
  router,
  store,
  vuetify,  
  render: h => h(App)
}).$mount('#app')

