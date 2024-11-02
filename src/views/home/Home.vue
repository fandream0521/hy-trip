<script setup>
import HomeNavBar from './components/HomeNavBar.vue';
import HomeSearchBox from './components/HomeSearchBox.vue';
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore();
homeStore.fetchAllHomeSuggests();
homeStore.fetchCategories();
const { hotSuggests, categories } = storeToRefs(homeStore);
</script>

<template>
    <div class="home">
        <home-nav-bar title="宏源旅途" />
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="banner" />
        </div>
        <home-search-box :hot-suggests="hotSuggests" :categories="categories" />
    </div>
</template>

<style lang="less" scoped>
.home {
    .banner {
        img {
            width: 100%;
        }
    }


}
</style>