<template>
    <div>
        <h2>学校名称： {{ name }} </h2>
        <h2>学校地址： {{ address }} </h2>
        <button @click="test">点我提示信息</button>
    </div>
</template>


<script>

    
    export default {
        // el: '#root', //组件定义时一定不要写el
        name: 'School',
        data() { // 组件写成函数式的
            return {
                name: '尚硅谷atguigu',
                address: '北京'
            }
        },
        methods: {
            test() {
                this.hello()
            }
        },
       

    }
</script>

<style>
/* 组件的样式 */
</style>