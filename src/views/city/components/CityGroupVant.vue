<script setup>
import useCityStore from '@/stores/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const cityStore = useCityStore();
const { currentGroup } = defineProps({
    currentGroup: {
        type: Object,
        required: true,
        default: () => ({}),
    }
})

const groupList = computed(() => currentGroup.cities?.map(item => item.group));

const handleSelect = (city) => {
    cityStore.curCity = city;
    router.back();
}
</script>

<template>
    <div class="city-group">
        <van-index-bar v-if="currentGroup.hotCities?.length > 0" :index-list="[]" :sticky="false">
            <van-index-anchor index="热门" />
            <div class="hot-city-list">
                <div class="hot-city" v-for="city in currentGroup.hotCities" :key="city.cityId"
                    @click="handleSelect(city)">{{ city.cityName }}
                </div>
            </div>
        </van-index-bar>
        <van-index-bar v-if="currentGroup.cities?.length > 0" :index-list="groupList" :sticky="false">
            <template v-for="city in currentGroup.cities" :key="city.group">
                <van-index-anchor :index="city.group" />
                <van-cell v-for="c in city.cities" :title="c.cityName" :key="city.cityId" @click="handleSelect(c)" />
            </template>
        </van-index-bar>
    </div>
</template>

<style lang="less" scoped>
.van-col {
    text-align: center;
    min-height: 36px;
}

.hot-city-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 20px 0 20px;

    .hot-city {

        width: 70px;
        height: 28px;
        line-height: 28px;
        margin: 3px 5px;
        border-radius: 14px;

        font-size: 12px;
        text-align: center;
        background-color: #fff4ec;
    }
}
</style>