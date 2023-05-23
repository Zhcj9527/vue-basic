/* 
  该文件是整个项目的入口文件
*/

// 引入Vue
import Vue from 'vue'
// 引入App组件，是所有组件的父组件
import App from './App.vue'
// 引入插件
import plugins from './plugins'

Vue.config.productionTip = false

// 使用插件
Vue.use(plugins)


// 创建Vue实例对象--vm
new Vue({
  render: h => h(App),
}).$mount('#app')
