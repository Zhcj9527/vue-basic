<template>
  <h3>我是App组件</h3>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <button @click="sayHello">说话</button>  
</template>

<script>
  import {h} from 'vue'
  export default {
    name: 'App',
    // 此处测试setup，暂时不考虑响应式
    setup() {
      // 数据
      let name = '张三';
      let age = 18;

      // 方法
      function sayHello() {
        alert(`我叫${name}, 我${age}岁了`)
      }

      // 返回一个对象（常用）
      return {
        name,
        age,
        sayHello
      }
      // 返回一个函数（渲染函数）
      // return () => h('h2','handsome')
    }
  }
</script>

