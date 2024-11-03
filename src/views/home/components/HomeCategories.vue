<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);

</script>

<template>
    <div class="categories">
        <a class="category" v-for="item in categories" :key="item.id" :href="item.navigateUrl">
            <div class="image">
                <img :src="item.pictureUrl" alt="">
            </div>
            <span class="text">
                {{ item.title }}
            </span>
        </a>
    </div>
</template>

<style lang="less" scoped>
.categories {
    display: flex;
    align-items: center;
    overflow-x: auto;
    height: 70px;

    &::-webkit-scrollbar {
        display: none;
    }

    .category {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 0 3px;
        margin: 0 10px;
        font-size: 14px;
        color: #333;

        .image {
            width: 32px;

            img {
                width: 100%;
            }
        }
    }
}
</style>