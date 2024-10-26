<script setup>

</script>

<template>
    <ul class="tab-bar">
        <li>
            <router-link to="/home" class="item" active-class="active">
                <i class="iconfont icon-shouye-zhihui"></i>
                首页
            </router-link>
        </li>
        <li>
            <router-link to="/favor" class="item" active-class="active">
                <i class="iconfont icon-xihuan"></i>
                收藏
            </router-link>
        </li>
        <li>
            <router-link to="/order" class="item" active-class="active">
                <i class="iconfont icon-fenxiang"></i>
                订单
            </router-link>
        </li>
        <li>
            <router-link to="/message" class="item" active-class="active">
                <i class="iconfont icon-xiaoxi-zhihui"></i>
                消息
            </router-link>
        </li>
    </ul>
</template>

<style lang="less" scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-around;

    height: 50px;

    font-size: 12px;

    background-color: #fff;

    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        color: #646566;
        height: 100%;

        .iconfont {
            font-size: 20px;
        }
    }

    .active {
        color: rgb(255, 150, 69) !important;
    }
}
</style>