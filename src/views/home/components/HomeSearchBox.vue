<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const cityClick = () => {
    console.log('cityClick');
    router.push('/city');
}

const getCurPositon = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
    }, (error) => {
        console.log(error);
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    });
}
</script>

<template>
    <div class="search-box">
        <div class="location">
            <div class="city" @click="cityClick">广州</div>
            <div class="position" @click="getCurPositon">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="location" />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.location {
    display: flex;
    align-items: center;
    padding: 0 15px;

    height: 44px;
    font-size: 15px;

    .city {
        flex: 1;
        color: #333;
    }

    .position {
        display: flex;
        justify-content: space-between;

        width: 74px;

        font-size: 12px;

        .text {
            position: relative;
            top: 3px;
            color: #666;
        }

        img {
            width: 18px;
            height: 18px;
            margin-left: 5px;
        }
    }
}
</style>