<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <template v-slot:middle>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control class="tab-control"
                    :titles="['流行','新款','精选']" 
                    @tabClick="tabClick"
                    ref="tabControl1" v-show="isTabFixed"/>
    <!-- 轮播图 -->
    <scroll class="content"
            ref="scroll"
            :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control :titles="['流行','新款','精选']" 
                    @tabClick="tabClick"
                    ref="tabControl2" v-show="!isTabFixed"/>
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop" />
    
  </div>
</template>

<script>
  import HomeSwiper from './childcomps/HomeSwiper'
  import HomeRecommend from './childcomps/HomeRecommend'
  import HomeFeature from './childcomps/HomeFeature'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import {getHomeMultidata,getHomeGoods} from 'network/home'


  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false
      }
    },
    methods: {
      // 事件监听相关方法
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position) {
        console.log(this.tabOffsetTop);
        this.isShowBackTop = (position.y < -1000)
        this.isTabFixed = (position.y < -this.tabOffsetTop)
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.finishPullUp()
        // this.$refs.scroll.refresh()
      },
      swiperImageLoad() {
        // BUG  为什么要减去44
        this.tabOffsetTop = this.$refs.tabControl2  .$el.offsetTop - 44
        // console.log(this.$refs.tabControl.$el.offsetTop);
      },

      // 网络请求相关代码
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          // console.log(res);
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      },
      

      
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata(),
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      
    },
    mounted() {
      // 赋值
      // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    /* 在使用原生滚动时为了使导航不跟随滚动设置   */
    /* position: relative; */
    /*
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999; */
  }
  #home {
    /* padding-top: 44px; */
    height: 100vh;
  }
  .tab-control {
    /* position: sticky;
    top: 43px;
    z-index: 9999; */
    position: relative;
  }
  .content {
    height: calc(100% - 49px);
    overflow: hidden;
  }
</style>