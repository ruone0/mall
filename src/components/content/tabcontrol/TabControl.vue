<template>
  <div class="tab-control">
      <div class="tab-item" v-for="(item, index) in titles" :key="index" @click="isActive(index)">
        <span :class="{active: index == currentIndex}">{{item}}</span>
      </div> 
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titles: {
        type: Array,
        default() {
            return []
        }
      }
    },
    data(){
      return {
          currentIndex: 0
      }
    },
    methods: {
      isActive(index) {
          this.currentIndex = index
      }
    }
  }
</script>

<style>
  .tab-control {
      display: flex;
      width: 100%;
      text-align: center;
      font-size: 15px;
      background-color: #fff;
  }
  .tab-item {
      flex: 1;
      height: 40px;
      line-height: 40px;
  }
  .active  {
      color: var(--color-high-text);
      border-bottom: 3px solid var(--color-high-text);
      padding: 5px;
  }

</style>