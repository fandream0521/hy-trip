import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore';
export default function useScroll() {
    const isReachBottom = ref(false);
    const scrollY = ref(0);
    const clientHeight = ref(0);
    const bodyHeight = ref(0);
    
    // 节流
    const scrollHandlerThrottle = throttle(() => {
        // 滚动到底部时，加载下一页数据
        scrollY.value = window.scrollY;
        clientHeight.value = document.documentElement.clientHeight;
        bodyHeight.value = document.body.clientHeight;
        if (clientHeight.value + scrollY.value >= bodyHeight.value) {
            console.log("滚动到底部了");
            isReachBottom.value = true;
        } else {
            isReachBottom.value = false;
        }
    }, 100);

    onMounted(() => {
        console.log('useScroll mounted');
        window.addEventListener('scroll', scrollHandlerThrottle);
    });

    onUnmounted(() => {
        console.log('useScroll unmounted');
        window.removeEventListener('scroll', scrollHandlerThrottle);
    });
    return {
        isReachBottom,
        scrollY,
        clientHeight,
        bodyHeight
    }
}