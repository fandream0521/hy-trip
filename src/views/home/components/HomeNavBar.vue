<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="nav-bar">
        <div class="title">
            {{ title }}
        </div>
    </div>
</template>

<style lang="less" scoped>
.nav-bar {
    border-bottom: 1px solid #f2f2f2;

    .title {
        line-height: 46px;
        text-align: center;
        color: var(--primary-color);
        font-size: 16px;
        font-weight: 600;
    }
}
</style>