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
import TabControl from '@/components/tab-control/TabControl.vue';
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
    console.log(scrollY.value);
    return scrollY.value > 265;
});
const tabClick = (index) => {
    let key = Object.keys(elRefs.value)[index];
    let el = elRefs.value[key];
    detailRef.value.scrollTo({
        top: el.offsetTop - 36,
        behavior: 'smooth'
    });
};

const elRefs = ref({});
const names = computed(() => {
    return Object.keys(elRefs.value);
});
const getSectionRef = (val) => {
    if (val) {
        const el = val.$el;
        let name = el?.getAttribute('name');
        elRefs.value[name] = el;
    }

}

const curIndex = computed(() => {
    let index = 0;
    let keys = Object.keys(elRefs.value);
    for (let i = 0; i < keys.length; i++) {
        if (elRefs.value[keys[i]].offsetTop - 36 < scrollY.value) {
            index = i;
        } else {
            break;
        }
    }
    return index;
});
</script>

<template>
    <div class="detail top-page" ref="detailRef">
        <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
        <div class="main" v-memo="[mainPart]">
            <detail-swipe :top-module="mainPart.topModule" />
            <detail-infos name="描述" :top-module="mainPart.topModule" :ref="getSectionRef" />
            <detail-house-facility name="设施" :facility-module="mainPart.dynamicModule?.facilityModule"
                :ref="getSectionRef" />
            <detail-house-landlor name="房东" :landlord-module="mainPart.dynamicModule?.landlordModule"
                :ref="getSectionRef" />
            <detail-house-comment name="评论" :comment-module="mainPart.dynamicModule?.commentModule"
                :ref="getSectionRef" />
            <detail-house-notice name="须知" :rules-module="mainPart.dynamicModule?.rulesModule" :ref="getSectionRef" />
            <detail-house-map name="地图" :ref="getSectionRef" />
            <detail-house-introduction :intro="mainPart.introductionModule" />
        </div>
        <div class="footer">
            <van-button round block type="info">预定</van-button>
        </div>
        <tab-control :titles="names" v-if="showTabControl" @tab-click="tabClick" :cur-index="curIndex" />
    </div>
</template>

<style lang="less" scoped>
.detail {
    .main {
        padding: 0 15px 50px;
    }

    .footer {
        height: 100px;
        text-align: center;
        padding: 20px;
        margin-top: 40px;
    }
}
</style>