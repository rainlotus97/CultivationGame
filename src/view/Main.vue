<script setup lang="ts">
import { useCountDown } from '@vant/use';
// import { onUnmounted } from 'vue';
// 使用 useCountDown 创建一个倒计时实例
const countDown = useCountDown({
    // 倒计时 24 小时
    time: 24 * 60 * 60 * 1000,
    millisecond: true,
});

let current = countDown.current;

// 开始倒计时




// const cancelLoop = useRaf(() => {
//     console.log('raf',new Date());

// }, {
//     isLoop: true, // 开启循环
//     interval: 1000, // 设置调用间隔
// },);

// 销毁生命周期
// onUnmounted(() => {
//     cancelLoop();
// });

</script>
<template>
    <div class="home">
        <span>总时间：{{ current.total }}</span>
        <span>剩余天数：{{ current.days }}</span>
        <span>剩余小时：{{ current.hours }}</span>
        <span>剩余分钟：{{ current.minutes }}</span>
        <span>剩余秒数：{{ current.seconds }}</span>
        <span>剩余毫秒：{{ current.milliseconds }}</span>

        <!-- <van-button type="primary" @click="cancelLoop">按钮</van-button> -->
    </div>
</template>
<style lang="less" scoped>
.home {
    padding: 20px;
    font-size: 20px;
}
</style>../common/XiuZhenZhe