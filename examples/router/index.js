import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

Vue.use(Router)

let routes = []
Object.keys(navConf).forEach(header => {
    routes = routes.concat(navConf[header])
})

const addComponent = (router) => {
    router.forEach((route) => {
        if(route.items) {
            addComponent(route.items)
            routes = routes.concat(route.items)
        } else {
            if(route.name === 'site-index') {
                // 加载首页的md文档
                route.component = (r) => require.ensure([], () => r())
            }else {
                // 加载相关页的说明文档
                
            }
        }
    })
}
addComponent(routes)

export default new Router({
    routes: []
})