// 整个包的入口
/**
 * 
 * @param {*} Vue 
 * vue use后，会自动找到install方法进行执行
 */
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import './fonts/iconfont.css'
const components = [
    Button,
    Dialog,
    Input
]
const install = function(Vue) {
    // 注册所有组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
// 判断是否是直接引入文件script，如果是，就不用调用Vue.use
if(typeof window !== 'undefined' && window.Vue) {
    install(Window.Vue)
}
export default install