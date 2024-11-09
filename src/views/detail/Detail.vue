<script setup>
import useDetailStore from '@/stores/modules/detail';
import { useRoute, useRouter } from 'vue-router';
import DetailSwipe from './components/DetailSwipe.vue';
import DetailInfos from './components/DetailInfos.vue';
import DetailHouseFacility from './components/DetailHouseFacility.vue';
import DetailHouseLandlor from './components/DetailHouseLandlor.vue';
import DetailHouseComment from './components/DetailHouseComment.vue';
import DetailHouseNotice from './components/DetailHouseNotice.vue';
import DetailHouseMap from './components/DetailHouseMap.vue';
import DetailHouseIntroduction from './components/DetailHouseIntroduction.vue';
import useScroll from '@/hooks/useScroll';
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
const router = useRouter();
const onClickLeft = () => {
    router.back();
};
const route = useRoute();
const detailStore = useDetailStore();
detailStore.getDetailInfos(route.params.houseId);
const { mainPart } = storeToRefs(detailStore);
const detailRef = ref();
const { scrollY } = useScroll(detailRef);
const showTabControl = computed(() => {
    return scrollY.value > 300;
});
</script>

<template>
    <div class="detail top-page" ref="detailRef">
        <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
        <div class="main">
            <detail-swipe :top-module="mainPart.topModule" />
            <detail-infos :top-module="mainPart.topModule" />
            <detail-house-facility :facility-module="mainPart.dynamicModule?.facilityModule" />
            <detail-house-landlor :landlord-module="mainPart.dynamicModule?.landlordModule" />
            <detail-house-comment :comment-module="mainPart.dynamicModule?.commentModule" />
            <detail-house-notice :rules-module="mainPart.dynamicModule?.rulesModule" />
            <detail-house-map />
            <detail-house-introduction :intro="mainPart.introductionModule" />
        </div>

        <tab-control :titles="['hh', 'bb', 'vv']" v-if="showTabControl" />
    </div>
</template>

<style lang="less" scoped>
.detail {
    .main {
        padding: 0 15px 50px;
    }
}
</style>