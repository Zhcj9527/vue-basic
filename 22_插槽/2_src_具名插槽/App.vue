<template>
  <div class="container">
    <Category title="foods">
      <img slot="center" src="" alt="">
      <a slot="footer" href="">更多美食</a>
    </Category>

    <Category title="games" :content='games'>
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <a slot="footer" href="">单机游戏</a>
      <a slot="footer" href="">网络游戏</a>
    </Category>

    <Category title="films">
      <video slot="center" src=""></video>
      <template v-slot:footer>
        <div>
          <a href="">单机游戏</a>
          <a href="">网络游戏</a>
          <a href="">网络游戏</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category.vue';

  export default {
    name: "App",
    components: {
      Category
    },
    data() {
      return {
        foods: ['火锅', '烧烤', '火锅', '烧烤'],
        games: ['火锅', '烧烤', '火锅', '烧烤'],
        films: ['火锅', '烧烤', '火锅', '烧烤']
      } 
    },
    
  };
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
  }
</style>



