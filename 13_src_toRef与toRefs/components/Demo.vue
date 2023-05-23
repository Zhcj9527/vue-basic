<template>
<h2>{{person}}</h2>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">加薪</button>
</template>

<script>
  // 需要用什么就引入什么----Vue3尿性
  import {reactive, toRef, toRefs} from 'vue' // 做数据代理,响应式数据 -> 深层次的 Proxy
  export default {
    name: 'Demo',
    // 此处测试setup，暂时不考虑响应式
    setup() {
      // 数据 person->代理对象（Proxy的实例对象，简称proxy对象）
      let person = reactive({
        name: '张三',
        age: 18,
        job:{
          j1:{
            salary:20
          }
        }
      })
      
      return { 
        person,
        /* name: toRef(person, 'name'),
        age: toRef(person, 'age'),
        salary: toRef(person.job.j1,'salary')  */
        ...toRefs(person)
      }
    },
  }
</script>

