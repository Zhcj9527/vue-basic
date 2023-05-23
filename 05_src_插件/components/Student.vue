<template>
    <div>
        <h2>学生姓名： {{ name }} </h2>
        <h2>学生性别： {{ sex }} </h2>
    </div>
</template>


<script>

    
    export default {
        // el: '#root', //组件定义时一定不要写el
        name: 'Student',
        data() { // 组件写成函数式的
            return {
                name:'张三',
                sex:'男',
            }
        },
        
    }
</script>

<style>
/* 组件的样式 */
</style>