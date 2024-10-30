<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const cancelClick = () => {
    console.log('cancelClick');
    router.back();
}
</script>

<template>
    <div class="city">
        <div class="top">
            <div class="search-box">
                <van-icon name="search" class="search-icon" />
                <input type="text" placeholder="城市/区域/位置" />
                <van-icon name="clear" class="clear-icon" />
            </div>
            <a href="#" class="cancel" @click.prevent="cancelClick">取消</a>
        </div>
    </div>
</template>

<style lang="less" scoped>
.city {
    .top {
        display: flex;
        align-items: center;

        padding: 10px 0 10px 10px;

        .search-box {
            flex: 1;
            display: flex;
            align-items: center;

            height: 34px;
            padding-left: 12px;
            border-radius: 17px;
            background: var(--van-search-content-background-color);

            .search-icon {
                color: var(--primary-color);
            }

            input {
                flex: 1;
                outline: none;
                border: none;
                background: var(--van-search-content-background-color);

                &::placeholder {
                    color: #969799;
                    font-size: 14px;
                }
            }

            .clear-icon {
                margin: 0 10px;
                color: var(--van-field-clear-icon-color);
            }
        }

        .cancel {
            margin: 0 10px;
            color: #323233;
            font-size: 14px;
        }

    }
}
</style>