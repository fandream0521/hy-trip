<script setup>
import useDetailStore from '@/stores/modules/detail';
import { useRoute, useRouter } from 'vue-router';
import DetailSwipe from './components/DetailSwipe.vue';

const router = useRouter();
const onClickLeft = () => {
    router.back();
};
const route = useRoute();
const detailStore = useDetailStore();
detailStore.getDetailInfos(route.params.houseId);
</script>

<template>
    <div class="detail top-page">
        <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
        <detail-swipe />
    </div>
</template>

<style lang="less" scoped></style>