<script setup>
import { defineProps, ref } from 'vue';
const { item } = defineProps({
    item: {
        type: Object,
        required: true,
        default: () => ({})
    }
})

const value = ref(+ item?.commentScore)
</script>

<template>
    <div class="type-3">
        <div class="cover">
            <img :src="item.image?.url" alt="" />
        </div>
        <div class="desc">
            <div class="location"><van-icon name="location" />{{ item.location }}</div>
            <div class="summaryText">{{ item.summaryText }}</div>
            <div class="houseName">{{ item.houseName }}</div>
            <div class="price">
                <span class="finalPrice">￥{{ item.finalPrice }}</span>
                <span class="productPrice">￥{{ item.productPrice }}</span>
                <span class="text">{{ item?.priceTipBadge?.text }}</span>
            </div>

        </div>
    </div>
</template>

<style lang="less" scoped>
.type-3 {

    width: 180px;
    height: 240px;
    border-radius: 10px;
    margin-top: 10px;
    overflow: hidden;
    background: #fff;

    .cover {
        width: 100%;

        img {
            width: 100%;
        }
    }

    .desc {
        color: #666;
        padding: 10px;

        .location {
            font-size: 12px;
            margin-bottom: 5px;
        }

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

        .price {

            .finalPrice {
                font-size: 14px;
                color: var(--primary-color);
            }

            .productPrice {
                margin-left: 5px;
                font-size: 12px;
                color: #999;
                text-decoration: line-through;
            }

            .text {
                padding: 1px 5px;
                margin-left: 5px;
                font-size: 12px;
                background: red;
                border-radius: 10px;
                color: #fff;
            }
        }
    }
}
</style>