<script setup>
import TabBarVant from '@/components/tab-bar/TabBarVant.vue'
import TabBar from './components/tab-bar/TabBar.vue';
import TabBarIcon from './components/tab-bar/TabBarIcon.vue';
import { ref } from 'vue'
const index = ref(0)
</script>

<template>
  <div class="app">
    <router-view />
    <TabBarVant />
  </div>
</template>

<style scoped></style>
