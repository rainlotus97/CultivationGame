<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { XiuzhenZheMap } from '@/common/XiuZhenZheMap';
import { userInfoStore } from './stores/UserInfo';
import { XiuzhenZhe } from './common/XiuZhenZhe';
const beforeunloadHandler = (event: BeforeUnloadEvent) => {
  console.log('beforeunload', event);
  XiuzhenZheMap.getInstance().clearXiuzhenZhe();
  event.returnValue = '确定离开当前页面吗？';
}

onMounted(() => {
  console.log('mounted');
  // 监听浏览器关闭
  window.addEventListener("beforeunload", (event: BeforeUnloadEvent) => beforeunloadHandler(event));

  const userStore = userInfoStore();
  const { name, age, sex, xiuWei,xiuZhenzheBasicStatus } = userStore;

  const xiuZhenZheInfo = new XiuzhenZhe(name, age, sex, xiuWei);
  xiuZhenZheInfo.setXiuzhenZheStatus(xiuZhenzheBasicStatus);
  
  XiuzhenZheMap.getInstance().setXiuzhenZhe(name, xiuZhenZheInfo);
});

onUnmounted(() => {
  console.log('unmounted');
  // 移除监听
  window.removeEventListener("beforeunload", (event: BeforeUnloadEvent) => beforeunloadHandler(event));
});

</script>

<template>
  <router-view />

  <van-tabbar route>
    <van-tabbar-item replace to="/story" icon="todo-list-o">故事</van-tabbar-item>
    <van-tabbar-item replace to="/main" icon="wap-home-o">修仙</van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped lang="less"></style>
