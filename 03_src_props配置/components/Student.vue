<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名： {{ name }} </h2>
        <h2>学生性别： {{ sex }} </h2>
        <h2>学生年龄： {{ myAge + 1 }} </h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>


<script>
/* const school = Vue.extend({
    // el: '#root', //组件定义时一定不要写el
    data() { // 组件写成函数式的
        return {
            schoolName: '尚硅谷',
            address: '北京'
        }
    }
}) */
export default {
    // el: '#root', //组件定义时一定不要写el
    name: 'Student',
    data() { // 组件写成函数式的
        return {
            msg:'我是尚硅谷的一个学生',
            myAge: this.age,
        }
    },
    methods: {
        updateAge() {
            this.myAge++
        }
    },
    // 简单声明接收    让组件接收外部传过来的数据，
    // 直接在组件标签中写<Demo name='xxx'/>
    props:['name', 'sex', 'age'], //******props的优先级更高于data,且只读，需要处理传进来的参数，需要先将其复制到data中再操作***

    // 接受的同时对数组进行类型转换
    /* props: {
        name:String,
        age:Number,
        sex:String
    } */

    // 接受的同时对数组进行类型限制+默认值的指定+必要性的限制
    /* props: {
        name:{
            type: String, // name的类型是字符串
            required: true // name是必须的
            // default:99 // 默认值 不能与required同时存在
        },
        age: {
            type: Number,
            default:99 // 默认值
        },
        sex: {
            type: String,
            required: true
        }
    } */
}
</script>

<style>
/* 组件的样式 */
</style>