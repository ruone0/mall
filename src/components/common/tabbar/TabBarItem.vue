<template>
    <div class="tab-bar-item" @click="active();itemClick()">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :class="{active: isActive}">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: "TabBarItem",
    props: {
        path: String
    },
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        active() {
            this.isActive = true
        },
        itemClick() {
            this.$router.replace(this.path)
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
    .active {
        color: pink;
    }
</style>