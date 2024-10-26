<script setup>
import { ref } from 'vue';
const messageCount = ref(0);

</script>

<template>
    <button @click="messageCount++">addCount</button>
    <button @click="messageCount--">subCount</button>
    <van-tabbar route active-color="#ff9854" inactive-color="#646566">
        <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/favor" icon="like-o">收藏</van-tabbar-item>
        <van-tabbar-item replace to="/order" icon="orders-o">订单</van-tabbar-item>
        <van-tabbar-item replace to="/message" icon="chat-o" @click="messageCount = 0"
            :badge="messageCount > 0 ? messageCount : null">消息</van-tabbar-item>
    </van-tabbar>
</template>

<style lang="less" scoped></style>