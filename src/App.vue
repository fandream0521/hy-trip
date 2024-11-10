<script setup>
import TabBarVant from '@/components/tab-bar/TabBarVant.vue'
import Loading from './components/loading/Loading.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div class="app">
    <router-view #default="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <tab-bar-vant v-if="!route.meta.isHideTabBar" />
    <loading />
  </div>
</template>

<style lang="less" scoped>
.app {
  font-size: 16px;
}
</style>
