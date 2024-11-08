<script setup>
import useDetailStore from '@/stores/modules/detail';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const detailStore = useDetailStore();
const { mainPart } = storeToRefs(detailStore);
const housePics = computed(() => mainPart.value.topModule?.housePicture.housePics);
const categoryHouses = computed(() => {
    let map = {};
    housePics.value?.forEach(pic => {
        let valueArray = map[pic.enumPictureCategory];
        if (!valueArray) {
            valueArray = [];
        }
        valueArray.push(pic);
        map[pic.enumPictureCategory] = valueArray;
    });
    return map;
})

/// replace 【】： to ''
const nameReg = /【(.*?)】/i
function getName(name) {
    const result = nameReg.exec(name);
    return nameReg.exec(name)[1]
}

function getRealIndexInCategory(item) {
    const items = categoryHouses.value[item.enumPictureCategory];
    return items.findIndex(pic => pic === item);
}
</script>

<template>
    <div class="detail-swipe">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="pic in housePics" :key="pic.orderIndex">
                <img :src="pic.url" alt="house-pic" />
            </van-swipe-item>
            <template #indicator="{ active, total }">
                <div class="indicator">
                    <div class="category" v-for="(list, category) in categoryHouses" :key="category">
                        <div class="item" :class="{ active: housePics[active]?.enumPictureCategory == category }">
                            <span class="title">
                                {{ getName(list[0]?.title) }}
                            </span>
                            <template v-if="housePics[active]?.enumPictureCategory == category">
                                <span class="count">
                                    {{ getRealIndexInCategory(housePics[active]) + 1 }}/{{ list.length }}
                                </span>
                            </template>
                        </div>
                    </div>
                </div>
            </template>
        </van-swipe>
    </div>

</template>

<style lang="less" scoped>
.my-swipe {
    img {
        width: 100%;
    }

    .indicator {
        display: flex;
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.4);

        .item {
            margin: 0 3px;
            color: white;

            &.active {
                padding: 0 5px;
                border-radius: 10px;
                background: #fff;
                color: #000;
            }

            .count {
                margin-left: 3px;
            }
        }
    }
}
</style>