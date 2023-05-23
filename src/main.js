/* 
  该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App组件，是所有组件的父组件
import App from './App.vue'

// 完整引入
// // 引入ElementUI组件库
// import ElementUI from 'element-ui';
// // 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// 引用ElementUI
// Vue.use(ElementUI);


// 创建Vue实例对象--vm
new Vue({
  render: h => h(App),
}).$mount('#app')
