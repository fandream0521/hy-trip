<script setup>
import { defineProps, ref } from 'vue';
defineProps({
    titles: {
        type: Array,
        required: true,
        default: () => []
    }
})

const currentIndex = ref(0);

const itemClick = (index) => {
    currentIndex.value = index;
}
</script>

<template>
    <div class="tab-control">
        <template v-for="(title, index) in titles">
            <div class="tab-control-item" :class="{ active: index === currentIndex }" @click="itemClick(index)">
                <span>{{ title }}</span>
            </div>
        </template>
    </div>
</template>

<style lang="less" scoped>
.tab-control {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;

    background: #fff;

    .tab-control-item {
        flex: 1 1 auto;
        text-align: center;
        font-size: 14px;
        color: #666;
        cursor: pointer;

        span {
            padding: 10px 4px;
            border-bottom: 3px solid transparent;
        }

        &.active {
            span {
                color: var(--primary-color);
                border-bottom: 3px solid var(--primary-color);
            }
        }
    }
}
</style>