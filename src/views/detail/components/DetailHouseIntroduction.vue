<script setup>
import { defineProps } from 'vue';
defineProps({
    intro: {
        type: Object,
        required: true,
        default: () => ({})
    }
})
</script>

<template>
    <div class="introduction">
        <h2 class="title">{{ intro.title }}</h2>
        <p class="content">
            {{ intro.introduction }}
        </p>
    </div>
</template>

<style lang="less" scoped>
.introduction {
    padding-bottom: 10px;

    .title {
        font-size: 18px;
        color: #333;
    }

    .content {
        margin-top: 10px;
        font-size: 12px;
        color: #666;
    }
}
</style>