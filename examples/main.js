import Vue from 'vue'
import App from './App.vue'
import SdTestUI from '../packages'
Vue.config.productionTip = false
Vue.use(SdTestUI)
 
new Vue({
  render: h => h(App),
}).$mount('#app')
