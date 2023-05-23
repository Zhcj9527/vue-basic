// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
// 引入vuex插件
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

//准备action——用于响应组件中的动作, 业务逻辑,ajax请求
const actions = {
  /* jia(context, value){
    console.log('actions中的jia被调用了', context, value);
    context.commit('JIA', value)
  },
  jian(context, value){
    console.log('actions中的jian被调用了', context, value);
    context.commit('JIAN', value)
  }, */
  jiaOdd(context, value){
    console.log('actions中的jiaOdd被调用了', context, value);
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait(context, value){
    console.log('actions中的jiaWait被调用了', context, value);
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500);
  }
}
//准备mutations——用于操作数据(state)
const mutations = {
  JIA(state, value){
    console.log('mutations中的JIA被调用了', state, value);
    state.sum += value
  },
  JIAN(state, value){
    console.log('mutations中的JIAN被调用了', state, value);
    state.sum -= value
  }
}
//准备state——用于存储数据
const state = {
  sum : 0 // 当前的和
}

// 准备getters——用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

// 创建并暴露store
export default new Vuex.Store({
  actions, 
  mutations, 
  state,
  getters
})
