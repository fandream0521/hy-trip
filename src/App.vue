<script setup>
import TabBarVant from '@/components/tab-bar/TabBarVant.vue'
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div class="app">
    <router-view />
    <tab-bar-vant v-if="!route.meta.isHideTabBar" />
  </div>
</template>

<style scoped>
.app {
  font-size: 16px;
}
</style>
