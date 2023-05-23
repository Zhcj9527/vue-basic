<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <hr>
  <h2>当点击时鼠标的坐标为：x:{{point.x}}, y: {{point.y}}</h2>
</template>
<script> 
  // 需要用什么就引入什么----Vue3尿性
  import {ref} from 'vue' // 做数据代理,响应式数据 -> 深层次的 Proxy
  import usePoint from '@/hooks/usePoint'
  export default {
    name: 'Demo',
    // 此处测试setup，暂时不考虑响应式
    setup() {
      // 数据 person->代理对象（Proxy的实例对象，简称proxy对象）
      let sum = ref(0)
      let point = usePoint()

      // 返回一个对象（常用）
      return {sum,point}
    },
  }
</script>

