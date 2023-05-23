<template>
    <div>
        <h2>学生姓名： {{ name }} </h2>
        <h2>学生年龄： {{ age }} </h2>
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
    name: 'Student',
    data() { // 组件写成函数式的
        return {
            name: '张三',
            age:18
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