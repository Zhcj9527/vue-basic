/* 
  该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App组件，是所有组件的父组件
import App from './App.vue'
// 全局配置消息订阅与发布
import pubsub from 'pubsub-js'
Vue.prototype.$pubsub = pubsub

Vue.config.productionTip = false


// 创建Vue实例对象--vm
new Vue({
  render: h => h(App),
  /* mounted() {
    console.log(this);
  }, */
}).$mount('#app')
