<script setup>
import TabBarVant from '@/components/tab-bar/TabBarVant.vue'
import TabBar from './components/tab-bar/TabBar.vue';
import TabBarIcon from './components/tab-bar/TabBarIcon.vue';
import { ref } from 'vue'
const index = ref(0)
</script>

<template>
  <div class="app">
    <h1>App</h1>
    <van-button type="primary" @click="index = 0">vant</van-button>
    <van-button type="primary" @click="index = 1">base</van-button>
    <van-button type="primary" @click="index = 2">icon</van-button>
    <router-view />
    <TabBarVant v-if="index === 0" />
    <TabBar v-else-if="index === 1" />
    <TabBarIcon v-else />
  </div>
</template>

<style scoped></style>
