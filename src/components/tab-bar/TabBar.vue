<script setup>
import tabBarData from '@/assets/data/tab-bar'
import { ref } from 'vue';
import { getAssetUrl } from '@/utils';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentIndex = ref(0);
const changeTab = (index, data) => {
    currentIndex.value = index;
    router.push(data.path);
};
</script>

<template>
    <div class="tab-bar">
        <template v-for="(data, index) in tabBarData" :key="data.id">
            <div class="tab-bar-item" :class="{ active: currentIndex === index }" @click="changeTab(index, data)">
                <img :src="getAssetUrl(currentIndex === index ? data.imageActive : data.image)" :alt="data.text">
                <span class="text">{{ data.text }}</span>
            </div>
        </template>
    </div>
</template>

<style lang="less" scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-around;

    height: 50px;

    font-size: 12px;

    background-color: #fff;
    border-top: 1px solid #ccc;

    .tab-bar-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        color: #646566;
        height: 100%;

        &.active {
            color: var(--primary-color);
        }

        img {
            width: 32px;
        }
    }
}
</style>