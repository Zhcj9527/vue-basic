<template>
  <div class="container">
    <Category title="foods">
      <img src="" alt="">
    </Category>

    <Category title="games" :content='games'>
      <ul>
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>

    <Category title="films">
      <video src=""></video>
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



