<template>
    <div class="demo title">
        <h2>学校名称： {{ name }} </h2>
        <h2>学校地址： {{ address }} </h2>
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
       

    }
</script>

<style scoped>
/*  scoped 让样式在局部生效，防止冲突 */
    .demo {
        background-color: skyblue;
    }
</style>