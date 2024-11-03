<script setup>
import { defineProps, ref } from 'vue';
const { item } = defineProps({
    item: {
        type: Object,
        required: true,
        default: () => ({})
    }
})
</script>

<template>
    <div class="type-3">
        <div class="cover">
            <img :src="item.image?.url" alt="" />
        </div>
        <div class="desc">
            <div class="summaryText">{{ item.summaryText }}</div>
            <div class="houseName">{{ item.houseName }}</div>
            <div class="rate-price">
                <van-rate :model-value="+ item.commentScore" readonly allow-half :size="13" color="#fff" />
                <span class="price">￥{{ item.finalPrice }}</span>
            </div>

        </div>
    </div>
</template>

<style lang="less" scoped>
.type-3 {
    position: relative;

    width: 180px;
    height: 240px;
    border-radius: 10px;
    margin-top: 10px;
    overflow: hidden;

    .cover {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
        }
    }

    .desc {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px;
        color: #fff;

        .summaryText {
            font-size: 12px;
            margin-bottom: 5px;
        }

        .houseName {
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            line-clamp: 2;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }

        .rate-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 5px;

            .price {
                font-size: 14px;
            }
        }
    }
}
</style>