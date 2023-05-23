<template>
    <div class="school">
        <h2>学校名称： {{ name }} </h2>
        <h2>学校地址： {{ address }} </h2>
        <button @click="sendSchoolName">把学校名给App</button>
    </div>
</template>


<script>

    
    export default {
        // el: '#root', //组件定义时一定不要写el
        name: 'School',
        props: ['getSchoolName'],
        data() { // 组件写成函数式的
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        methods: {
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
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