<template>
    <div class="school">
        <h2>学校名称： {{ name }} </h2>
        <h2>学校地址： {{ address }} </h2>
    </div>
</template>


<script>

    
    export default {
        name: 'School',
        data() { // 组件写成函数式的
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        mounted() {
            this.$bus.$on('hello', (data) => {
                console.log('我是School组件，收到啦数据', data);
                console.log(this);
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        },
    }
</script>

<style scoped>
/*  scoped 让样式在局部生效，防止冲突 */
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>