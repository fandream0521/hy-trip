<script setup>
import DetailSection from '@/components/detail-section/DetailSection.vue';
</script>

<template>
    <div class="map">
        <detail-section title="位置周边" footer="查看更多周边信息">
            <div class="map-container">
                <img src="https://img.yzcdn.cn/vant/leaf.jpg" alt="map" />
            </div>
        </detail-section>
    </div>
</template>

<style lang="less" scoped>
.map {

    .map-container {
        margin-top: 10px;

        img {
            width: 100%;
        }
    }
}
</style>