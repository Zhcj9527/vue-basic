<template>
  <h3>我是App组件</h3>
  <h2>{{person.name}}</h2>
  <h2>{{person.age}}</h2>
  <h2>{{person.job.type}}</h2>
  <h2>{{person.job.salary}}</h2>
  <h2>{{person.hobby}}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
  import {reactive} from 'vue' // 做数据代理,响应式数据 -> 深层次的 Proxy
  export default {
    name: 'App',
    // 此处测试setup，暂时不考虑响应式
    setup() {
      // 数据 person->代理对象（Proxy的实例对象，简称proxy对象）
      let person = reactive({
        name:'张三',
        age:18,
        job:{
          type: '前端工程师',
          salary: '30k',
          a:{
            b:{
              c:666
            }
          }
        },
        hobby:['抽烟', '喝酒', '烫头']
      })

      // 方法
      function changeInfo() {
        person.name = '李四'
        person.age = 38
        person.job.type = 'UI工程师'
        person.job.salary = '60k'
        // console.log(job);
        // console.log(name,age);
        person.hobby[0] = '学习'
      }

      // 返回一个对象（常用）
      return {
        person,
        changeInfo
      }
    }
  }
</script>

