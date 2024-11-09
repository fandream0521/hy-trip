<script setup>
import { defineProps } from 'vue';
defineProps({
    topModule: {
        type: Object,
        required: true,
        default: () => ({})
    }
})
</script>

<template>
    <div class="info">
        <h2 class="name">
            {{ topModule?.houseName }}
        </h2>
        <div class="houseTags">
            <template v-for="tag in topModule.houseTags" :key="tag.tagCode">
                <span class="tag" v-if="tag.tagText" :style="{
                    color: tag.tagText.color,
                    backgroundColor: tag.tagText.background.color
                }">
                    {{ tag.tagText.text }}
                </span>
            </template>
        </div>
        <div class="comment" v-if="topModule.commentBrief">
            <div class="content">
                <span class="score">
                    {{ topModule.commentBrief.overall }}
                </span>
                <span class="title">
                    {{ topModule.commentBrief.scoreTitle }}
                </span>
                <span class="brief">
                    "{{ topModule.commentBrief.commentBrief }}"
                </span>
            </div>
            <span class="more">
                {{ topModule.commentBrief.totalCount }}条评论 >
            </span>
        </div>
        <div class="address" v-if="topModule.nearByPosition">
            <div class="content">
                <span class="title">
                    {{ topModule.nearByPosition.address }}
                </span>
            </div>
            <span class="more">
                地图·周边 >
            </span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.info {
    padding: 15px 0;

    .name {
        font-size: 22px;
    }

    .houseTags {
        margin-top: 10px;

        font-size: 13px;

        .tag {
            padding: 2px 3px;
            margin-right: 5px;
        }
    }

    .comment,
    .address {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 40px;
        padding: 0 10px;
        margin-top: 10px;
        background: #f5f5f5;

        .content {

            .score {
                font-size: 16px;
                margin-right: 2px;
                font-weight: 600;
            }

            .title {
                font-size: 12px;
                font-weight: 600;
            }

            .brief {
                font-size: 12px;
                color: #999;
            }
        }

        .more {
            font-size: 12px;
            color: var(--primary-color);
        }
    }


}
</style>