<script setup>
import { defineProps } from 'vue';
import DetailSection from '@/components/detail-section/DetailSection.vue';
defineProps({
    rulesModule: {
        type: Object,
        required: true,
        default: () => ({})
    }
});


</script>

<template>
    <div class="notice">
        <detail-section title="预定须知">
            <div class="notice-item" v-for="item in rulesModule.orderRules">
                <span class="title">{{ item.title }}: </span>
                <span class="intro">{{ item.introduction }}</span>
                <span class="tip" v-if="item.tips">查看说明</span>
            </div>
        </detail-section>
    </div>
</template>

<style lang="less" scoped>
.notice {
    padding-bottom: 10px;

    .notice-item {
        display: flex;
        padding: 10px 0;

        .title {
            flex: 0 0 auto;
            width: 100px;
            font-size: 12px;
            color: #333;
        }

        .intro {
            flex: 1 1 auto;
            font-size: 12px;
            color: #666;
        }

        .tip {
            flex: 0 0 auto;
            font-size: 12px;
            color: var(--primary-color);
        }
    }
}
</style>