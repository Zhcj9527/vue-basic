<template>
  <div class="category">
    <h3>{{title}}分类</h3>

    <!-- 定义一个插槽（挖个坑，等着和组件的使用者进行填充） -->
    <slot :games='games'>我是一些默认值，当使用者没有传递具体结构的时候，我会出现1</slot>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    props:['title'],
    data() {
      return {
        games: ['火锅', '烧烤', '火锅', '烧烤'],
      } 
    },
  }
</script>

<style>
  .category {
    width: 200px;
    height: 300px;
    background-color: skyblue;
  }

  h3 {
    text-align: center;
    background-color: orange;
  }
</style>