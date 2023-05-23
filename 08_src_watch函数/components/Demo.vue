<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我加1</button>
  <hr>
  <h2>当前的信息为：{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">加薪</button>
</template>

<script>
  // 需要用什么就引入什么----Vue3尿性
  import {ref,reactive, watch} from 'vue' // 做数据代理,响应式数据 -> 深层次的 Proxy
  export default {
    name: 'Demo',
    // 此处测试setup，暂时不考虑响应式
    setup() {
      // 数据 person->代理对象（Proxy的实例对象，简称proxy对象）
      let sum = ref(0)
      let msg = ref('你好啊')
      let person = reactive({
        name: '张三',
        age: 18,
        job:{
          j1:{
            salary:20
          }
        }
      })
      
      //情况一：监视ref定义的一个响应式数据----配置项
      /* watch(sum,(newVal, oldVal)=>{
        console.log(newVal, oldVal);
      },{immediate:true}) */

      //情况二：监视ref定义的多个响应式数据----数组
      /* watch([sum,msg],(newVal, oldVal)=>{
        console.log(newVal, oldVal);
      }) */

      //情况三：监视reactive定义的一个响应式数据的全部属性,
      // 注意：此处无法正确获取oldValue
      // 注意：强制开启了深度监视（deep配置无效）
      /* watch(person, (newVal, oldVal)=> {
        console.log(newVal, oldVal);
      },{deep:false}) */

      // 情况四：监视reactive定义的一个响应式数据的一个属性
      // 可以将其写成"函数式"获取这个属性
      /* watch(()=>person.age, (newVal, oldVal)=> {
        console.log(newVal, oldVal);
      }) */

      // 情况五：监视reactive定义的一个响应式数据的某些属性
      // 可以将其写成"函数式"获取这个属性
      /* watch([()=>person.age,()=>person.name], (newVal, oldVal)=> {
        console.log(newVal, oldVal);
      }) */

      // 特殊情况 注意：此处无法正确获取oldValue
      watch(()=>person.job, (newVal, oldVal)=> {
        console.log(newVal, oldVal);
      },{deep:true}) //此处由于监视的是reactive所定义的对象中的某个属性（也是一个复杂对象），所以开启deep是有效的




      // 返回一个对象（常用）
      return {
        sum,
        msg,
        person,
      }
    },
    mounted() {
      console.log(this);
    },
  }
</script>

