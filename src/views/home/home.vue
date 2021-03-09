<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <template v-slot:middle>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childcomps/HomeSwiper'
  import HomeRecommend from './childcomps/HomeRecommend'
  import {getHomeMultidata} from 'network/home'

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend
    },
    data(){
      return {
        banners: [],
        recommends: []
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