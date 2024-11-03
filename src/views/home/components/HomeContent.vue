<script setup>
import HouseItemV3 from '@/components/house-item/HouseItemV3.vue';
import HouseItemV9 from '@/components/house-item/HouseItemV9.vue';
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore();
const { homeList } = storeToRefs(homeStore);
</script>

<template>
    <div class="home-content">
        <h2 class="title">热门精选</h2>
        <div class="list">
            <template v-for="item in homeList" :key="item.data.houseId">
                <house-item-v9 v-if="item.discoveryContentType === 9" :item="item.data" />
                <house-item-v3 v-else-if="item.discoveryContentType === 3" :item="item.data" />
            </template>
        </div>
    </div>
</template>

<style lang="less" scoped>
.home-content {
    padding: 10px 0;
    font-size: 18px;
    margin-bottom: 50px;

    .title {
        padding: 0 10px;
    }

    .list {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
}
</style>