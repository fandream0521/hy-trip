<script setup>
import useDetailStore from '@/stores/modules/detail';
import { computed } from 'vue';

const detailStore = useDetailStore();
const housePics = computed(() => detailStore.mainPart.topModule?.housePicture.housePics);

</script>

<template>
    <div class="detail-swipe">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="pic in housePics" :key="pic.orderIndex">
                <img :src="pic.url" alt="house-pic" />
            </van-swipe-item>
            <template #indicator="{ active, total }">
                <div class="indicator">{{ active + 1 }}/{{ total }}</div>
            </template>
        </van-swipe>
    </div>
</template>

<style lang="less" scoped>
.my-swipe {
    img {
        width: 100%;
    }

    .indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: rgba(255, 255, 255, 0.1);
    }
}
</style>