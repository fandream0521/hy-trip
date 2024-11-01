<script setup>
import { computed, ref } from 'vue';
import { showToast } from 'vant'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import CityGroupVant from './components/CityGroupVant.vue';
const router = useRouter();
const searchValue = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => router.back();

const cityStore = useCityStore();
cityStore.fetchAllCities();
const { allCities } = storeToRefs(cityStore);

const tabActive = ref();
</script>

<template>
    <div class="city top-page">
        <div class="top">
            <van-search shape="round" v-model="searchValue" show-action placeholder="城市/区域/位置" @search="onSearch"
                @cancel="onCancel" />
            <van-tabs v-model:active="tabActive" color="#ff9854">
                <van-tab v-for="(item, key) in allCities" :title="item.title" :name="key" />
            </van-tabs>
        </div>
        <div class="content">
            <template v-for="(item, key) in allCities" :key="key">
                <CityGroupVant :currentGroup="item" :tab-active="tabActive" v-show="tabActive === key" />
            </template>
        </div>
        <!-- <van-tabs v-model:active="tabActive" color="#ff9854">
            <van-tab v-for="(item, key) in allCities" :title="item.title" class="content" :name="key">
                <van-index-bar v-if="item.hotCities?.length > 0" :index-list="[]" :sticky="false">
                    <van-index-anchor index="热门" />
                    <van-row justify="center">
                        <van-col span="6" v-for="city in item.hotCities">
                            <van-tag round type="primary" size="large">{{ city.cityName }}</van-tag>
                        </van-col>
                    </van-row>
                </van-index-bar>
                <van-index-bar v-if="item.cities?.length > 0" :index-list="getGroupList(key)" :sticky="false">
                    <template v-for="city in item.cities">
                        <van-index-anchor :index="city.group" />
                        <van-cell v-for="c in city.cities" :title="c.cityName" />
                    </template>
</van-index-bar>
</van-tab>
</van-tabs> -->
    </div>
</template>

<style lang="less" scoped>
.city {
    .content {
        overflow-y: auto;
        height: calc(100vh - 98px);
    }
}
</style>