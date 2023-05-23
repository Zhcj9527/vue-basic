<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
  import {ref, customRef} from 'vue'
  export default {
    name: 'App',
    setup() {
      function myRef(value,delay) {
        let timer;
        return  customRef((track, trigger) => {
          return {
            get() {
              console.log(111);
              track() // 通知Vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
              return value
            },
            set(newValue) {
              clearTimeout(timer)
              console.log(222);
              timer = setTimeout(() => {
                value = newValue
                trigger() // 通知Vue去重新解析模板
              }, delay);
              
            }
          }
        })
      }

      // let keyWord = ref('hello') // 使用Vue提供的ref
      let keyWord = myRef('hello',500) // 使用程序员自定义的ref

      return {keyWord}
    }    
  }
</script>

