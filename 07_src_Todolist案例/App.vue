<template>
    <div> 
        
    </div>
</template>

<script>
    
    import MyList from './components/MyList.vue';
    import MyFooter from './components/MyFooter.vue';
    import MyHeader from './components/MyHeader.vue';

    

    export default {
        name:'App',
        components:{
            MyHeader,
            MyFooter,
            MyList
        },
        
        
    }
</script>

<style>
    .title {
        color:red;
    }
</style>