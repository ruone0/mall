<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:middle>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
  <!-- <div>首页</div> -->
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from 'network/home'

  export default {
      name: 'home',
      components: {
        NavBar
      },
      data(){
        return {
          banners: [],
          recommends: [],
        }
      },
      created() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          console.log(res);
        })
      }

  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
  }
</style>