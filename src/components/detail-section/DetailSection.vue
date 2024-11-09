<script setup>
import { defineProps } from 'vue';
defineProps({
    title: {
        type: String,
        required: true,
        default: '默认标题'
    },
    footer: {
        type: String,
        required: false,
    }
})
</script>

<template>
    <div class="section">
        <div class="header">
            <h2 class="title">
                {{ title }}
            </h2>
        </div>
        <div class="content">
            <slot>
                默认内容
            </slot>
        </div>
        <div class="footer" v-if="footer">
            <span class="more">
                {{ footer }} >
            </span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.section {
    margin-top: 15px;
    border-top: 3px solid #f2f3f4;

    .title {
        padding: 12px 0;
        font-size: 18px;
        border-bottom: 1px solid #f0f0f0;
    }

    .footer {
        display: flex;
        justify-content: flex-end;
        padding: 10px 0;
        margin-top: 10px;
        color: var(--primary-color);
        font-size: 12px;
    }


}
</style>