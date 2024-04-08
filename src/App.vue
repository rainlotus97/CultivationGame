<script setup lang="ts">
</script>

<template>
<router-view />

<van-tabbar route>
  <van-tabbar-item replace to="/story" icon="todo-list-o">故事</van-tabbar-item>
  <van-tabbar-item replace to="/main" icon="wap-home-o">修仙</van-tabbar-item>
  <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
</van-tabbar>

</template>

<style scoped lang="less">


</style>
