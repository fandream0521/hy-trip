<script setup>
import { computed, ref, watch } from 'vue';
import tabBarData from '@/assets/data/tab-bar'
import { getAssetUrl } from '@/utils';
import { useRoute } from 'vue-router';
const route = useRoute();
const curIndex = ref(0);
watch(route, () => {
    const index = tabBarData.findIndex(item => item.path === route.path);
    if (index !== -1) {
        curIndex.value = index;
    }
});


</script>

<template>
    <van-tabbar route active-color="#ff9854" inactive-color="#646566" v-model="curIndex">
        <template v-for="data in tabBarData" :key="data.id">
            <van-tabbar-item replace :to="data.path">
                <span>{{ data.text }}</span>
                <template #icon="{ active }">
                    <img :src="getAssetUrl(active ? data.imageActive : data.image)" :alt="data.text">
                </template>
            </van-tabbar-item>
        </template>


        <!-- <van-tabbar-item replace to="/favor" icon="like-o">收藏</van-tabbar-item>
        <van-tabbar-item replace to="/order" icon="orders-o">订单</van-tabbar-item>
        <van-tabbar-item replace to="/message" icon="chat-o" @click="messageCount = 0"
            :badge="messageCount > 0 ? messageCount : null">消息</van-tabbar-item> -->
    </van-tabbar>
</template>

<style lang="less" scoped>
:deep(.van-tabbar-item__icon) img {
    height: 26px;
}
</style>