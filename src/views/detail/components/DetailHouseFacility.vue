<script setup>
import { defineProps } from 'vue';
import DetailSection from '@/components/detail-section/DetailSection.vue';
defineProps({
    facilityModule: {
        type: Object,
        required: true,
        default: () => ({})
    }
});
</script>

<template>
    <div class="house-facility">
        <detail-section title="房屋设施" footer="查看全部设施">
            <template v-for="(facility, index) in facilityModule.houseFacility?.houseFacilitys">
                <div class="item" v-if="facilityModule.houseFacility.facilitySort.includes(index)">
                    <div class="group-name">
                        <div class="icon">
                            <img :src="facility.icon" alt="group-icon" />
                        </div>
                        {{ facility.groupName }}
                    </div>
                    <div class="facility-list">
                        <div class="facility-item" v-for="facilityItem in facility.facilitys.slice(0, 4)">
                            <van-icon name="passed" color="#22ffdd" />
                            <span class="name">
                                {{ facilityItem.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </template>
        </detail-section>
    </div>
</template>

<style lang="less" scoped>
.house-facility {
    padding-bottom: 10px;

    .item {
        display: flex;
        font-size: 12px;
        background: #f5f5f5;

        .group-name {
            flex: 0 0 auto;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;

            width: 21%;
            align-items: center;
            padding: 15px 10px;

            .icon {
                width: 20px;
                height: 20px;

                img {
                    width: 100%;
                }
            }

        }

        .facility-list {
            flex: 1;
            display: flex;
            align-items: center;
            align-content: center;
            flex-flow: row wrap;

            padding-left: 15px;

            .facility-item {
                flex: 0 0 auto;
                width: 50%;
                margin: 1px 0;

                .name {
                    margin-left: 3px;
                }
            }

        }
    }
}
</style>