import { XiuZhenzheBasicStatus } from '@/common/XiuZhenZhe';
import { defineStore } from 'pinia';

export const userInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            name: '',
            age: 0,
            sex: '',
            imageUrl: '',
            xiuWei: 0,
            xiuZhenzheBasicStatus: {
                tiPo: 0,
                zhanLi: 0,
                shuLiandu: 0,
                wuXing: 0,
                daoDe: 0
            }
        }
    },
    actions: {
        setUserInfo(name: string, age: number, sex: string) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        },
        setXiuWei(xiuWei: number) {
            this.xiuWei = xiuWei;
        },
        setImageUrl(imageUrl: string) {
            this.imageUrl = imageUrl;
        },
        setXiuZhenzheBasicStatus(xiuZhenzheBasicStatus: XiuZhenzheBasicStatus) {
            this.xiuZhenzheBasicStatus = xiuZhenzheBasicStatus;
        }
    },
    persist: {
        key: 'userInfo',
        storage: localStorage,
        paths: ['name', 'age', 'sex', 'imageUrl', 'xiuWei','xiuZhenzheBasicStatus']
    }

})
