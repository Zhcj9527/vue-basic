<template>
    <div>
        <h2>学校名称： {{ name }} </h2>
        <h2>学校地址： {{ address }} </h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>


<script>
/* const school = Vue.extend({
    // el: '#root', //组件定义时一定不要写el
    data() { // 组件写成函数式的
        return {
            schoolName: '尚硅谷',
            address: '北京'
        }
    }
}) */
export default {
    // el: '#root', //组件定义时一定不要写el
    name: 'School',
    data() { // 组件写成函数式的
        return {
            name: '尚硅谷',
            address: '北京'
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    },
}
</script>

<style>
/* 组件的样式 */
</style>