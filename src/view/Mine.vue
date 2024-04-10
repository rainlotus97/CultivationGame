<script setup lang='ts'>
import { ref } from 'vue';
import { userInfoStore } from '../stores/UserInfo';
import { XiuZhenzheBasicStatus, XiuzhenZhe } from '@/common/XiuZhenZhe';
import { XiuzhenZheMap } from '@/common/XiuZhenZheMap';
import { StageType, stageTypeIdentity } from '@/common/basicType';

const userStore = userInfoStore();

const xiuZhenZhe = XiuzhenZheMap.getInstance().getXiuzhenZhe(userStore.name)

const name = ref<string>();
const age = ref<number>()
const sex = ref<string>()
const xiuwei = ref<number>()
const zhanLi = ref<number>()
const jingjie = ref<StageType>(StageType.LIAN_QI)
const jingjieRank = ref<number>()

name.value = xiuZhenZhe.getName();
age.value = xiuZhenZhe.getAge()
sex.value = xiuZhenZhe.getSex()
xiuwei.value = xiuZhenZhe.getCurrentStageItem()
zhanLi.value = xiuZhenZhe.getXiuzhenZheStatus().zhanLi
jingjie.value = xiuZhenZhe.getStageType()
jingjieRank.value = xiuZhenZhe.getStageItemRank()
const createXiuZhenZhe = () => {
    userStore.setUserInfo('修真者', 18, '男');
    userStore.setXiuWei(Math.floor(Math.random() * 1000));
    let basicStatus: XiuZhenzheBasicStatus = {
        tiPo: Math.floor(Math.random() * 100),
        zhanLi: Math.floor(Math.random() * 100),
        shuLiandu: Math.floor(Math.random() * 100),
        wuXing: Math.floor(Math.random() * 100),
        daoDe: Math.floor(Math.random() * 100),
    };
    userStore.setXiuZhenzheBasicStatus(basicStatus);
    const { name, age, sex, imageUrl, xiuWei, xiuZhenzheBasicStatus } = userStore;
    let xiuZhenZheInfo = new XiuzhenZhe(name, age, sex, xiuWei);
    xiuZhenZheInfo.setXiuzhenZheStatus(xiuZhenzheBasicStatus);
    XiuzhenZheMap.getInstance().setXiuzhenZhe(name, xiuZhenZheInfo);


    console.log('创建角色', name, age, sex, imageUrl, xiuWei);
}

const addZhanLi = () => {
    userStore.setXiuZhenzheBasicStatus({
        ...userStore.xiuZhenzheBasicStatus,
        zhanLi: userStore.xiuZhenzheBasicStatus.zhanLi + 1
    });
    xiuZhenZhe.setXiuzhenZheStatus(userStore.xiuZhenzheBasicStatus);
    zhanLi.value = xiuZhenZhe.getXiuzhenZheStatus().zhanLi
}

const addXiuWei = () => {
    userStore.setXiuWei(userStore.xiuWei + Math.floor(Math.random() * 100));
    xiuZhenZhe.setXiuzhenZheStageByCurrentStageItem(userStore.xiuWei);
    xiuwei.value = xiuZhenZhe.getCurrentStageItem()
    jingjie.value = xiuZhenZhe.getStageType()
    jingjieRank.value = xiuZhenZhe.getStageItemRank()
}
</script>

<template>
    <div class="mine">
        <div class="personalInfo">
            <van-image round src="../assets/images/1.jpg" />
            <div class="info">
                <div class="name">姓名：{{ name }} </div>
                <div class="age">年龄：{{ age }}</div>
                <div class="sex">性别：{{ sex }}</div>
                <div class="xiuwei">修为：{{ xiuwei }}</div>
                <div class="zhanli">战力：{{ zhanLi }}</div>
                <div class="jingjie">境界：{{ stageTypeIdentity[jingjie] }}</div>
                <div class="jingjie_rank">阶段：{{ jingjieRank }}重</div>
            </div>
            <van-button type="primary" @click="createXiuZhenZhe">创建角色</van-button>
            <van-button type="primary" @click="addZhanLi">增加战力</van-button>
            <van-button type="primary" @click="addXiuWei">增加修为</van-button>
        </div>
    </div>
</template>
<style lang="less" scoped>
button {
    margin: 10px;
}
</style>