<script setup>
import { computed, ref } from 'vue';
import { showToast } from 'vant'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
const router = useRouter();
const searchValue = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => router.back();

const cityStore = useCityStore();
cityStore.fetchAllCities();
const { allCities, getGroupList } = storeToRefs(cityStore);

const tabActive = ref(0);

</script>

<template>
    <div class="city top-page">
        <form action="/">
            <van-search shape="round" v-model="searchValue" show-action placeholder="城市/区域/位置" @search="onSearch"
                @cancel="onCancel" />
        </form>
        <van-tabs v-model:active="tabActive" color="#ff9854">
            <van-tab v-for="(item, key) in allCities" :title="item.title">
                <van-index-bar v-if="item.hotCities?.length > 0" :index-list="[]">
                    <van-index-anchor index="热门" />
                    <van-row justify="center">
                        <van-col span="6" v-for="city in item.hotCities">
                            <van-tag round type="primary" size="large">{{ city.cityName }}</van-tag>
                        </van-col>
                    </van-row>
                </van-index-bar>
                <van-index-bar v-if="item.cities?.length > 0" :index-list="getGroupList(key)">
                    <template v-for="city in item.cities">
                        <van-index-anchor :index="city.group" />
                        <van-cell v-for="c in city.cities" :title="c.cityName" />
                    </template>
                </van-index-bar>
            </van-tab>
        </van-tabs>
    </div>
</template>

<style lang="less" scoped>
.van-col {
    text-align: center;
    min-height: 36px;
}
</style>