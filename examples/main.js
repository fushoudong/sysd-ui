import Vue from 'vue'
import App from './App.vue'
import SdTestUI from '../packages'
import router from './router'
Vue.config.productionTip = false
Vue.use(SdTestUI)
 
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
