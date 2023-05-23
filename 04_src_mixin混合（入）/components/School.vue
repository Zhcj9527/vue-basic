<template>
    <div>
        <h2 @click="showName">学校名称： {{ name }} </h2>
        <h2>学校地址： {{ address }} </h2>
    </div>
</template>


<script>

    import { mixin, mixin2 } from "../mixin.js";
    export default {
        // el: '#root', //组件定义时一定不要写el
        name: 'School',
        data() { // 组件写成函数式的
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        mixins:[mixin, mixin2]

    }
</script>

<style>
/* 组件的样式 */
</style>