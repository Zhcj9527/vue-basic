<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
</template>
<script>
  // 需要用什么就引入什么----Vue3尿性
  import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue' // 做数据代理,响应式数据 -> 深层次的 Proxy
  export default {
    name: 'Demo',
    // 此处测试setup，暂时不考虑响应式
    setup() {
      console.log('---setup---');
      // 数据 person->代理对象（Proxy的实例对象，简称proxy对象）
      let sum = ref(0)

      // 通过组合式API的形式去使用生命周期钩子
      onBeforeMount(()=>{
        console.log('---onBeforeMount---');         
      }),
      onMounted(()=>{
        console.log('---onMounted---');
      }),
      onBeforeUpdate(()=>{
        console.log('---onBeforeUpdate---');
      }),
      onUpdated(()=>{
        console.log('---onUpdated---');
      }),
      onBeforeUnmount(()=>{
        console.log('---onBeforeUnmount---');
      }),
      onUnmounted(()=>{
        console.log('---onUnmounted---');
      })

      // 返回一个对象（常用）
      return {sum}
    },
    // 通过配置项的形式使用生命周期钩子
    //#region 
    /* beforeCreate() {
      console.log('---beforeCreate---');
    },
    created() {
      console.log('---created---');
    },
    beforeMount() {
      console.log('---beforeMount---');
    },
    mounted() {
      console.log('---mounted---');
    },
    beforeUpdate() {
      console.log('---beforeUpdate---');
    },
    updated() {
      console.log('---updated---');
    },
    beforeUnmount() {
      console.log('---beforeUnmount---');
    },
    unmounted() {
      console.log('---unmounted---');
    }, */
    //#endregion
  }
</script>

