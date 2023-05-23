// 混合是吧多个组件共用的配置提取成一个混入对象 mixins:[mixin, mixin2]
export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好啊！！');
    },
}
export const mixin2 = {
    data() {
        return {
            x:100,
            y:200
        }
    },
}