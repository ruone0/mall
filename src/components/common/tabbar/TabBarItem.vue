<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: "TabBarItem",
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'pink'
        }
    },
    data() {
        return {
            // isActive: false,
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.path)
        }
    },
    computed: {
        isActive() {
            return this.$route.path.includes(this.path)
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor}: {}
        }
    }
}
</script>

<style>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        background-color: #f6f6f6;  
    }
    .tab-bar-item img {
        width: 24px;
        margin-top: 3px;
        vertical-align: middle;
    }
    .tab-bar-item div {
        margin: 2px 0;
        font-size: 12px;
        font-style: normal;
    }
</style>