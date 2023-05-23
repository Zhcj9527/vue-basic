<template>
    <div> 
        <Student/>
        <hr/>
        <School/>
    </div>
</template>

<script>
    // 引入组件
    import School from './components/School.vue';
    import Student from './components/Student.vue';

    export default {
        name:'App',
        components:{
            Student,
            School
        },
        
        
    }
</script>

<style>

</style>