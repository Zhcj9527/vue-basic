// 引入的不是Vue构造函数了，引入的是createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象
createApp(App).mount('#app') 
