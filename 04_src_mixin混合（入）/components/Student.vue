<template>
    <div>
        <h2 @click="showName">学生姓名： {{ name }} </h2>
        <h2>学生性别： {{ sex }} </h2>
    </div>
</template>


<script>

    import { mixin, mixin2 } from "../mixin.js";
    export default {
        // el: '#root', //组件定义时一定不要写el
        name: 'Student',
        data() { // 组件写成函数式的
            return {
                name:'张三',
                sex:'男',
            }
        },
        mixins:[mixin, mixin2]
    }
</script>

<style>
/* 组件的样式 */
</style>