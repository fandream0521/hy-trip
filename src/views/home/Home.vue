<script setup>
import HomeNavBar from './components/HomeNavBar.vue';
import HomeSearchBox from './components/HomeSearchBox.vue';
import HomeCategories from './components/HomeCategories.vue';
import HomeContent from './components/HomeContent.vue';
import useHomeStore from '@/stores/modules/home';
import useScroll from '@/hooks/useScroll';
import { watch, ref, computed } from 'vue';

const homeStore = useHomeStore();
homeStore.fetchAllHomeSuggests();
homeStore.fetchCategories();
homeStore.fetchHomeListByPage();
// 监听window的scroll事件
const { isReachBottom, scrollY } = useScroll();
// 监听滚动到底部事件
watch(isReachBottom, (val) => {
    if (val) {
        homeStore.fetchHomeListByPage();
    }
});
// 监听滚动事件，控制搜索框的显示和隐藏
const isShowSearchBar = computed(() => scrollY.value > 100);

</script>

<template>
    <div class="home">
        <home-nav-bar title="宏源旅途" />
        <div class="search-bar" v-if="isShowSearchBar">
            <van-search placeholder="搜索目的地、景点、酒店" />
        </div>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="banner" />
        </div>
        <home-search-box />
        <home-categories />

        <home-content />
    </div>
</template>

<style lang="less" scoped>
.home {
    position: relative;
    background: #f5f5f5;

    .banner {
        img {
            width: 100%;
        }
    }

    .search-bar {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }

}
</style>