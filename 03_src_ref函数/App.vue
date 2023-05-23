<template>
  <h3>我是App组件</h3>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <h2>{{job.type}}</h2>
  <h2>{{job.salary}}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
  import {ref} from 'vue' // 做数据代理,响应式数据
  export default {
    name: 'App',
    // 此处测试setup，暂时不考虑响应式
    setup() {
      // 数据
      let name = ref('张三');
      let age = ref(18);
      let job = ref({
        type: '前端工程师',
        salary: '30k'
      })

      // 方法
      function changeInfo() {
        // name.value = '李四'
        // age.value = 38
        job.value.type = 'UI工程师'
        job.value.salary = '60k'
        console.log(job.value);
        // console.log(name,age);
      }

      // 返回一个对象（常用）
      return {
        name,
        age,
        job,
        changeInfo
      }
    }
  }
</script>

