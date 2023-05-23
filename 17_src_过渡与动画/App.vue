<template>
    <div class="app"> 
        <!-- <h1>{{msg}}</h1> -->
        <test/>
        <test2/>
        <!-- <School/>
        <Student/> -->
    </div>
</template>

<script>
    // 引入组件
    // import School from './components/School.vue';
    // import Student from './components/Student.vue';
    import test from './components/test.vue';
    import test2 from './components/test2.vue';
    

    export default {
        name:'App',
        components:{
            // Student,
            // School,
            test,
            test2
        },
        data() {
            return {
                msg: '你好啊！！'
            }
        },
        
    }
</script>

<style>
    /*
    .app {
        background-color:gray;
        padding: 5px;
    }
    */
</style>