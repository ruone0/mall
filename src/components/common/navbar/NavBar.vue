<template>
  <div class="nav-bar">    
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="middle">
        <slot name="middle"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>      
  </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>
    .nav-bar {
        display: flex;
        height: 44px;
        color: #fff;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    }
    .left {
        width: 60px;
    }
    .middle {
        flex: 1;
    }
    .right{
        width: 60px;
    }
</style>