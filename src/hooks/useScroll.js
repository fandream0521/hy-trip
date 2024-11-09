import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore';
export default function useScroll(ele) {
    let el = window;
    const isReachBottom = ref(false);
    const scrollY = ref(0);
    const clientHeight = ref(0);
    const scrollHeight = ref(0);
    // 节流
    const scrollHandlerThrottle = throttle(() => {
        // 滚动到底部时，加载下一页数据
        if (el === window) {
            scrollY.value = document.documentElement.scrollTop || document.body.scrollTop;
            clientHeight.value = document.documentElement.clientHeight || document.body.clientHeight;
            scrollHeight.value = document.documentElement.scrollHeight || document.body.scrollHeight;
        } else {
            scrollY.value = el.scrollTop;
            clientHeight.value = el.clientHeight;
            scrollHeight.value = el.scrollHeight;
        }
        if (clientHeight.value + scrollY.value >= scrollHeight.value) {
            isReachBottom.value = true;
        } else {
            isReachBottom.value = false;
        }
    }, 100);

    
    onMounted(() => {
        if (ele) {
            el = ele.value;
        }
        console.log('useScroll mounted');
        el.addEventListener('scroll', scrollHandlerThrottle);
    });

    onUnmounted(() => {
        console.log('useScroll unmounted');
        el.removeEventListener('scroll', scrollHandlerThrottle);
    });
    return {
        isReachBottom,
        scrollY,
        clientHeight,
        scrollHeight
    }
}