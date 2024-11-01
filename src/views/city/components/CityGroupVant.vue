<script setup>
import { computed } from 'vue';

const { currentGroup } = defineProps({
    currentGroup: {
        type: Object,
        required: true,
        default: () => ({}),
    }
})

const groupList = computed(() => currentGroup.value?.cities.map(item => item.group));
</script>

<template>
    <div class="city-group">
        <van-index-bar v-if="currentGroup.hotCities?.length > 0" :index-list="[]" :sticky="false">
            <van-index-anchor index="热门" />
            <van-row justify="center">
                <van-col span="6" v-for="city in currentGroup.hotCities">
                    <van-tag round type="primary" size="large">{{ city.cityName }}</van-tag>
                </van-col>
            </van-row>
        </van-index-bar>
        <van-index-bar v-if="currentGroup.cities?.length > 0" :index-list="groupList" :sticky="false">
            <template v-for="city in currentGroup.cities" :key="city.group">
                <van-index-anchor :index="city.group" />
                <van-cell v-for="c in city.cities" :title="c.cityName" :key="city.cityId" />
            </template>
        </van-index-bar>
    </div>
</template>

<style lang="less" scoped>
.van-col {
    text-align: center;
    min-height: 36px;
}
</style>