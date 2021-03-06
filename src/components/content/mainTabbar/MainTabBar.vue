<template>
  <div>
      <ul id="tab-bar">
          <li class="tab-bar-item">首页</li>
          <li class="tab-bar-item">分类</li>
          <li class="tab-bar-item">购物车</li>
          <li class="tab-bar-item">我的</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'MainTabBar'
}
</script>

<style>
    #tab-bar {
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;  
        box-shadow: 0px -2px 1px rgba(100, 100, 100, .1);
    }
    .tab-bar-item {
        /* 
        
        */
        flex: 1;
        text-align: center;
        height: 49px;
        line-height: 49px;
        background-color: #f6f6f6;  
    }

    ul,li {
        list-style: none;
    }
</style>