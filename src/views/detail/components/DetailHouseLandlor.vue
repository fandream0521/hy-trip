<script setup>
import { defineProps } from 'vue';
defineProps({
    landlordModule: {
        type: Object,
        required: true,
        default: () => ({})
    }
});
</script>

<template>
    <div class="landlord">
        <detail-section title="房东介绍" footer="查看房东主页">
            <div class="top-scroll" v-if="landlordModule.topScroll">
                <img :src="landlordModule.topScroll" alt="landlord-pic" />
            </div>
            <div class="info">
                <div class="left">
                    <div class="logo">
                        <img :src="landlordModule?.hotelLogo" alt="landlord-logo" />
                    </div>
                    <div class="desc">
                        <h4>{{ landlordModule.hotelName }}</h4>
                        <div class="tags">
                            <span class="tag" v-for="(tag, index) in landlordModule.hotelTags" :style="{
                                color: tag.tagText.color,
                                backgroundColor: tag.tagText.background?.color
                            }">
                                {{ tag.tagText.text }} {{ index === landlordModule.hotelTags.length - 1 ? '' : '| ' }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <van-button round color="var(--primary-color)" size="mini">联系房东</van-button>
                </div>
            </div>
            <div class="summary" v-if="landlordModule.hotelSummary">
                <div class="item" v-for="item in landlordModule.hotelSummary">
                    <span class="title">{{ item.title }}</span>
                    <span class="introduction">{{ item.introduction }}</span>
                    <span class="tip">{{ item.tip }}</span>
                </div>
            </div>
        </detail-section>
    </div>
</template>

<style lang="less" scoped>
.landlord {
    padding-bottom: 10px;

    .top-scroll {
        img {
            width: 100%;
        }
    }

    .info {
        display: flex;
        align-items: center;

        .left {
            flex: 1;
            display: flex;
            align-items: center;

            .logo {
                width: 40px;
                height: 40px;

                img {
                    width: 100%;
                }
            }

            .desc {
                margin-left: 3px;
                font-size: 13px;

                .tags {
                    font-size: 12px;
                }
            }
        }
    }

    .summary {
        display: flex;
        justify-content: space-around;

        margin-top: 40px;
        font-size: 12px;

        .item {
            display: flex;
            flex-flow: column nowrap;
            color: #666;

            .introduction {
                margin: 2px 0;
                font-size: 14px;
                font-weight: 600;
                color: #000;

            }
        }
    }
}
</style>