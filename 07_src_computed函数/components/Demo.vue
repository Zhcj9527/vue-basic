<template>
<h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName">
  <br>
  <span>全名：{{person.fullName}}</span>
  <br/>
  <input type="text" v-model="person.fullName">
</template>

<script>
  import {reactive, computed} from 'vue' // 做数据代理,响应式数据 -> 深层次的 Proxy
  export default {
    name: 'Demo',
    // 此处测试setup，暂时不考虑响应式
    setup() {
      // 数据 person->代理对象（Proxy的实例对象，简称proxy对象）
      let person = reactive({
        firstName:'张',
        lastName:'三'
      })
      // 计算属性--简写（没有考虑被修改的情况）
      /* person.fullName = computed(() => {
        return person.firstName + '-' + person.lastName
      }) */
      // 计算属性--完整写法（考虑读写）
      person.fullName = computed({
        get() {
          return person.firstName + '-' + person.lastName
        },
        set(value) {
          const nameArr = value.split('-');
          person.firstName = nameArr[0]
          person.lastName = nameArr[1]
        }
      })


      // 返回一个对象（常用）
      return {
        person,
      }
    },
    mounted() {
      console.log(this.person);
    },
  }
</script>

