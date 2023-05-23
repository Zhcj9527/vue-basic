<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}} </h1>
    <h1>当前求和为：{{$store.getters.bigSum}} </h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name: 'Count',
    data() {
      return {
        n : 1, // 用户选择的数字
      }
    },
    methods: {
      increment() {
        this.$store.commit('JIA', this.n)  // 没有业务逻辑的  直接commit 大写的函数名给 mutations 操作数据
      },
      decrement() {
        this.$store.commit('JIAN', this.n) // 没有业务逻辑的  直接commit 大写的函数名给 mutations 操作数据
      },
      incrementOdd() {
        this.$store.dispatch('jiaOdd', this.n) // 有业务逻辑的 需要先dispatch小写函数名给actions写业务逻辑再commit给mutation大写函数名
      },
      incrementWait() {
        this.$store.dispatch('jiaWait', this.n) // 同上
      },
    },
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>