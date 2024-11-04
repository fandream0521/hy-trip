<script setup>
import useCityStore from '@/stores/modules/city';
import dayjs from 'dayjs';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useHomeStore from '@/stores/modules/home';
import useMainStore from '@/stores/modules/main';

const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore);

const router = useRouter();
const cityClick = () => {
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

const cityStore = useCityStore();
const { curCity } = storeToRefs(cityStore);

const mainStore = useMainStore();

const show = ref(false);

const onConfirm = (value) => {
    mainStore.startDate = dayjs(value[0]);
    mainStore.endDate = dayjs(value[1]);
    show.value = false;

}

const formatter = (day) => {
    if (day.type === 'start') {
        day.bottomInfo = '入住';
    } else if (day.type === 'end') {
        day.bottomInfo = '离店';
    }

    return day;
};

const searchClick = () => {
    router.push({
        path: '/search',
        query: {
            curCity: curCity.value,
            startDate: startDate.value,
            endDate: endDate.value,
        }
    });
}
</script>

<template>
    <div class="search-box">
        <div class="location">
            <div class="city" @click="cityClick">{{ curCity.cityName }}</div>
            <div class="position" @click="getCurPositon">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="location" />
            </div>
        </div>
        <div class="selection data-range" @click="show = true">
            <div class="start">
                <span class="text">
                    入住
                </span>
                <span class="date">
                    {{ mainStore.formattedStartDate() }}
                </span>
            </div>
            <div class="stay">
                共{{ mainStore.diffDays }}晚
            </div>
            <div class="end">
                <span class="text">
                    离店
                </span>
                <span class="date">
                    {{ mainStore.formattedEndDate() }}
                </span>
            </div>
        </div>
        <van-calendar v-model:show="show" type="range" @confirm="onConfirm" :show-confirm="false" :formatter="formatter"
            :round="false" color="#ff9854" />

        <div class="info">
            <div class="desc selection">
                <span>价格不限</span>
                <span>人数不限</span>
            </div>
            <div class="keyword selection">
                关键字/位置/民宿名
            </div>
            <div class="hot-suggests">
                <a class="suggest" v-for="suggest in hotSuggests" :href="suggest.tagLink" :style="{
                    color: suggest.tagText.color,
                    backgroundColor: suggest.tagText.background.color
                }">
                    {{ suggest.tagText.text }}
                </a>
            </div>
        </div>

        <!-- 搜索 -->
        <div class="search-btn">
            <div class="btn" @click="searchClick">
                开始搜索
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.search-box {
    --van-calendar-popup-height: 100%;

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

    .selection {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 44px;
        padding: 0 70px 0 15px;

        color: #666;
        font-size: 14px;
    }

    .data-range {

        .start,
        .end {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .text {
                color: #666;
                font-size: 12px;
            }

            .date {
                font-size: 16px;
                color: #333;
            }
        }

        .stay {
            font-size: 12px;
            color: #666;
        }

    }

    .hot-suggests {
        display: flex;
        flex-flow: wrap;
        padding: 0 40px 0 10px;
        font-size: 12px;
        line-height: 14px;

        .suggest {
            padding: 3px 10px;
            border-radius: 20px;
            margin: 3px 5px;
        }
    }

    .search-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 64px;

        .btn {
            width: 342px;
            height: 38px;
            max-height: 50px;
            font-weight: 500;
            font-size: 18px;
            line-height: 38px;
            text-align: center;
            border-radius: 20px;
            color: #fff;
            background-image: var(--theme-linear-gradient),
        }
    }


}
</style>