<template>
  <swiper>
    <!--将index换为key不行,会有一张空白 -->
    <swiper-item v-for="(item, index) in banners"  :key="index">  
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'
  
  export default {
    name: 'HomeSwiper',  // HomeSwiper没加引号！！！！！！
    components: {
        Swiper,
        SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      },
    //   recommends: {
    //     type: Array,
    //     default() {
    //       return []
    //     }
    //   }
    }
  }
</script>

<style>

</style>