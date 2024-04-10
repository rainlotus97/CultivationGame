import { StageItemCapcity, StageType } from "./basicType";

const stageItemCapcityArray: number[] = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
    1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000,
    3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000,
    9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000,
    20000, 22000, 24000, 26000, 28000, 30000, 32000, 34000, 36000, 38000,
    43000, 48000, 53000, 58000, 63000, 68000, 73000, 78000, 83000, 88000,
    98000, 108000, 118000, 128000, 138000, 148000, 158000, 168000, 178000, 188000,
    208000, 228000, 248000, 268000, 288000, 308000, 328000, 348000, 368000, 388000,
    438000, 488000, 538000, 588000, 638000, 688000, 738000, 788000, 838000, 888000,
    988000, 1088000, 1188000, 1288000, 1388000, 1488000, 1588000, 1688000, 1788000, 1888000,
    2088000, 2288000, 2488000, 2688000, 2888000, 3088000, 3288000, 3488000, 3688000, 3888000,
    4388000, 4888000, 5388000, 5888000, 6388000, 6888000, 7388000, 7888000, 8388000, 8888000,
    9888000, 10888000, 11888000, 12888000, 13888000, 14888000, 15888000, 16888000, 17888000, 18888000,
    20888000, 22888000, 24888000, 26888000, 28888000, 30888000, 32888000, 34888000, 36888000, 38888000,
    43888000, 48888000, 53888000, 58888000, 63888000, 68888000, 73888000, 78888000, 83888000, 88888000,
    98888000, 108888000, 118888000, 128888000, 138888000, 148888000, 158888000, 168888000, 178888000, 188888000
];

const stageTypeArray: Array<keyof typeof StageType> =
    ['LIAN_QI', 'ZHU_JI', 'JIE_DAN', 'YUAN_YING', 'HUA_SHEN', 'HE_TI', 'DONG_XU', 'DA_CHENG', 'DU_JIE', 'DI_XIAN',
        'XUAN_XIAN', 'JIN_XIAN', 'XIAN_JUN', 'XIAN_ZUN', 'XIAN_DI', 'HONG_MENG'];

export class XiuzhenZhe {
    private name: string = '';
    private age: number = 0;
    private sex: string = '';
    private stageType: StageType = StageType.LIAN_QI;
    private stageItemCapcity: StageItemCapcity = StageItemCapcity.lianQi;
    private stageItemRank: number = 1;
    private currentStageItem: number = 0;
    private xiuzhenZheStatus: XiuZhenzheBasicStatus = {
        tiPo: 0,
        zhanLi: 0,
        shuLiandu: 0,
        wuXing: 0,
        daoDe: 0
    };
    constructor(name: string, age: number, sex: string, currentStageItem: number = 0) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.setXiuzhenZheStageByCurrentStageItem(currentStageItem);
    }

    public setXiuzhenZheInfo(name: string, age: number, sex: string) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    public setXiuzhenZheStageByCurrentStageItem(currentStageItem: number) {
        this.currentStageItem = currentStageItem;
        this.stageType = this.getStageTypeByCurrentStageItem(this.currentStageItem);
        this.stageItemCapcity = this.getStageItemCapcityByStageType(this.stageType);
    }

    private getStageTypeByCurrentStageItem(currentStageItem: number) {
        let stageType: StageType = StageType.LIAN_QI;
        for (let i = 0; i < stageItemCapcityArray.length; i++) {
            if (currentStageItem < stageItemCapcityArray[i]) {
                let currentIndex = Math.floor(i / 10);
                stageType = StageType[stageTypeArray[currentIndex]];
                // 向下取整
                this.stageItemRank = Math.floor(i % 10) + 1;
                break;
            }
        }
        return stageType;
    }

    private getStageItemCapcityByStageType(stageType: StageType) {
        return StageItemCapcity[stageType];
    }

    // 获取修真者的名字
    public getName() {
        return this.name;
    }

    // 获取修真者的年龄
    public getAge() {
        return this.age;
    }

    // 获取修真者的性别
    public getSex() {
        return this.sex;
    }

    // 获取修真者的修炼阶段
    public getStageType() {
        return this.stageType;
    }

    // 获取修真者当前阶段升级所需修为
    public getStageItemCapcity() {
        return this.stageItemCapcity;
    }

    // 获取修真者当前阶段
    public getStageItemRank() {
        return this.stageItemRank;
    }

    // 获取修真者当前修为
    public getCurrentStageItem() {
        return this.currentStageItem;
    }

    // 设置修真者当前修为
    public setXiuzhenZheStatus(xiuzhenZheStatus: XiuZhenzheBasicStatus) {
        this.xiuzhenZheStatus = xiuzhenZheStatus;
    }

    // 获取修真者当前状态
    public getXiuzhenZheStatus() {
        return this.xiuzhenZheStatus;
    }
}


export interface XiuZhenzheBasicStatus {
    tiPo: number;
    // 攻击力
    zhanLi: number;
    // 武器熟练度
    shuLiandu: number;
    // 悟性，+习得成功率  
    wuXing: number;
    // 道德，+奇遇奖励率 绝对值越大，奖励越高 为负数时，惩罚越高 为正值时，无惩罚
    daoDe: number;
}