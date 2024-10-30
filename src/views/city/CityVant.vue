<script setup>
import { ref } from 'vue';
import { showToast } from 'vant'
import { useRouter } from 'vue-router';
import { getAllCity } from '@/services/modules/city';
const router = useRouter();
const searchValue = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => router.back();
getAllCity();
const tabActive = ref(0);
</script>

<template>
    <div class="city top-page">
        <form action="/">
            <van-search shape="round" v-model="searchValue" show-action placeholder="城市/区域/位置" @search="onSearch"
                @cancel="onCancel" />
        </form>
        <van-tabs v-model:active="tabActive" color="#ff9854">
            <van-tab title="国内·港澳台">
                <van-index-bar>
                    <van-index-anchor index="热门" />
                    <van-row justify="center" align="center">
                        <van-col span="6">
                            <van-tag round type="primary" size="large">标签1</van-tag>
                        </van-col>
                        <van-col span="6">
                            <van-tag round type="primary" size="large">标签2</van-tag>
                        </van-col>
                        <van-col span="6">
                            <van-tag round type="primary" size="large">标签3</van-tag>
                        </van-col>
                        <van-col span="6">
                            <van-tag round type="primary" size="large">标签4</van-tag>
                        </van-col>
                        <van-col span="6">
                            <van-tag round type="primary" size="large">标签1</van-tag>
                        </van-col>
                        <van-col span="6">
                            <van-tag round type="primary" size="large">标签2</van-tag>
                        </van-col>
                        <van-col span="6">
                            <van-tag round type="primary" size="large">标签3</van-tag>
                        </van-col>
                        <van-col span="6">
                            <van-tag round type="primary" size="large">标签4</van-tag>
                        </van-col>
                    </van-row>
                    <van-index-anchor index="A" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="B" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                </van-index-bar>
            </van-tab>
            <van-tab title="海外">
                <van-index-bar>
                    <van-index-anchor index="A" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="B" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                </van-index-bar>
            </van-tab>

        </van-tabs>
    </div>
</template>

<style lang="less" scoped>
.van-col {
    text-align: center;
    min-height: 36px;
}
</style>