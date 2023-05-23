<template>
    <div> 
        <h2 v-text="msg" ref="title"></h2>
        <button ref="btn" @click="showDOM">点我输出上方的DOM</button>
        <school ref="sch"/>
        <!-- <Student></Student> -->
    </div>
</template>

<script>
    // 引入组件
    import School from './components/School.vue';
    // import Student from './components/Student.vue';

    export default {
        name:'App',
        components:{
            School,
            // Student
        },
        data() {
            return {
                msg:'欢迎学习Vue'
            }
        },
        methods: {
            showDOM() {
                console.log(this.$refs.title); // 真实DOM元素
                console.log(this.$refs.btn); // 真实DOM元素
                console.log(this.$refs.sch); // School组件的实例对象vc--子组件
            }
        },
    }
</script>

<style>

</style>