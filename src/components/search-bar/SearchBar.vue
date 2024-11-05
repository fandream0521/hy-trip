<script setup>
import useMainStore from '@/stores/modules/main';

const mainStore = useMainStore();
</script>

<template>
    <div class="search-bar">
        <div class="time-range">
            <div class="item start">
                <span class="text">住</span>
                <span class="date">{{ mainStore.formattedStartDate('MM.DD') }}</span>
            </div>
            <div class="item end">
                <span class="text">离</span>
                <span class="date">{{ mainStore.formattedEndDate('MM.DD') }}</span>
            </div>
        </div>
        <div class="content">
            <div class="keyword">
                关键字/位置/民宿
            </div>
        </div>
        <div class="right">
            <van-icon name="search" />
        </div>
    </div>
</template>

<style lang="less" scoped>
.search-bar {
    display: flex;
    align-items: center;

    font-size: 10px;
    background-color: #f5f5f5;
    height: 40px;
    border-radius: 10px;

    .time-range {

        padding: 0 10px;

        .item {
            padding: 3px 0;

            .text {
                color: #666;
            }

            .date {
                color: #333;
            }
        }

        .start {
            border-right: 1px solid #ddd;
        }
    }

    .content {
        flex: 1;
        padding: 0 10px;

        height: 30px;
        line-height: 30px;
        color: #666;
        font-size: 12px;

        .keyword {
            padding-left: 10px;
        }
    }

    .right {
        font-size: 18px;
        padding: 0 10px;
    }
}
</style>