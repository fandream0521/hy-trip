<script setup>
import HomeNavBar from './components/HomeNavBar.vue';
import HomeSearchBox from './components/HomeSearchBox.vue';
import HomeCategories from './components/HomeCategories.vue';
import HomeContent from './components/HomeContent.vue';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import useHomeStore from '@/stores/modules/home';
import useScroll from '@/hooks/useScroll';
import { watch, ref, computed, onActivated } from 'vue';

const homeStore = useHomeStore();
homeStore.fetchAllHomeSuggests();
homeStore.fetchCategories();
homeStore.fetchHomeListByPage();
const homeRef = ref();
// 监听window的scroll事件
const { isReachBottom, scrollY } = useScroll(homeRef);
// 监听滚动到底部事件
watch(isReachBottom, (val) => {
    if (val) {
        homeStore.fetchHomeListByPage();
    }
});
// 监听滚动事件，控制搜索框的显示和隐藏
const isShowSearchBar = computed(() => scrollY.value > 360);

// 当返回当前页面时，保存滚动位置
onActivated(() => {
    homeRef.value.scrollTo({
        top: scrollY.value
    })
})
</script>

<template>
    <div class="home" ref="homeRef">
        <home-nav-bar title="宏源旅途" />

        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="banner" />
        </div>
        <home-search-box />
        <home-categories />
        <div class="search-bar-box" v-if="isShowSearchBar">
            <search-bar />
        </div>
        <home-content />
    </div>
</template>

<style lang="less" scoped>
.home {
    height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;
    background: #f5f5f5;


    .banner {
        img {
            width: 100%;
        }
    }

    .search-bar-box {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        height: 45px;
        padding: 16px 16px 10px;
        background-color: #fff;
        z-index: 10;
    }

}
</style>