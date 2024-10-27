<script setup>
import HomeNavBar from './components/HomeNavBar.vue';
</script>

<template>
    <div class="home">
        <home-nav-bar title="宏源旅途" />
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="banner" />
        </div>
        <div class="location">
            <div class="city">广州</div>
            <div class="position">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="location" />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.home {
    .banner {
        img {
            width: 100%;
        }
    }

    .location {
        display: flex;
        align-items: center;
        padding: 0 15px;

        height: 44px;
        font-size: 14px;

        .city {
            flex: 1;
        }

        .position {
            display: flex;
            justify-content: space-between;

            width: 74px;

            font-size: 12px;

            .text {
                position: relative;
                top: 3px;
                color: #999;
            }

            img {
                width: 18px;
                height: 18px;
                margin-left: 5px;
            }
        }
    }
}
</style>