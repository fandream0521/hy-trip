<script setup>
import { defineProps } from 'vue';

defineProps({
    commentModule: {
        type: Object,
        required: true,
        default: () => ({})
    }
});

const formatMore = (count) => {
    return;
}
</script>

<template>
    <div class="comments">
        <detail-section title="热门评论" :footer="`查看全部${commentModule.totalCount}条评论`">
            <div class="summary">
                <div class="left">
                    <div class="score">
                        <span class="text">
                            {{ commentModule.overall }}
                        </span>
                        <div class="underline"></div>
                    </div>
                    <div class="desc">
                        <span class="title">
                            {{ commentModule.scoreTitle }}
                        </span>
                        <span class="count">
                            {{ commentModule.totalCount }}条评论
                        </span>
                        <van-rate v-model="commentModule.overall" readonly allow-half size="12" />
                    </div>
                </div>
                <div class="right">
                    <div class="list">
                        <span class="item" v-for="item in commentModule.subScores">
                            {{ item }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="tags">
                <span class="tag" v-for="tag in commentModule.commentTagVo" :style="{
                    color: tag.color,
                    backgroundColor: tag.backgroundColor
                }">
                    {{ tag.text }}
                </span>
            </div>
            <div class="comment-item" v-if="commentModule.comment">
                <div class="header">
                    <div class="avatar">
                        <img :src="commentModule.comment.userAvatars" alt="avatar" />
                    </div>
                    <div class="info">
                        <div class="name">
                            {{ commentModule.comment.userName }}
                        </div>
                        <div class="time">
                            {{ commentModule.comment.checkInDate }}
                        </div>
                    </div>
                </div>
                <div class="content">
                    {{ commentModule.comment.commentDetail }}
                </div>
            </div>
        </detail-section>
    </div>
</template>

<style lang="less" scoped>
.comments {
    .summary {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-top: 18px;
        font-size: 12px;

        .left {
            flex: 0 0 auto;
            display: flex;
            align-items: center;

            .score {
                font-size: 42px;
                font-weight: 600;

                .underline {
                    height: 6px;
                    width: 52px;
                    margin-top: -15px;
                    border-radius: 3px;
                    background: var(--primary-color);
                }
            }

            .desc {
                flex: 0 0 auto;
                display: flex;
                flex-flow: column nowrap;

                margin-left: 5px;
            }
        }

        .right {
            width: 150px;

            .item {
                margin-left: 5px;
            }
        }
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        margin-top: 16px;
        font-size: 13px;

        .tag {
            padding: 2px 5px;
            margin-right: 10px;
            margin-bottom: 6px;
            border-radius: 12px;
        }
    }

    .comment-item {
        margin-top: 16px;
        background: #f5f5f5;

        .header {
            display: flex;
            align-items: center;
            padding: 5px;

            .avatar {
                width: 27px;
                height: 27px;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 100%;
                }
            }

            .info {
                margin-left: 10px;

                .name {
                    margin: 2px 0;
                    font-size: 12px;
                }

                .time {
                    font-size: 10px;
                    color: #999;
                }
            }
        }

        .content {
            padding: 10px;
            font-size: 12px;
        }
    }
}
</style>