// 修仙体系
enum StageType {
    LIAN_QI = 'lianQi',
    ZHU_JI = 'zhuJi',
    JIE_DAN = 'jieDan',
    YUAN_YING = 'yuanYing',
    HUA_SHEN = 'huaShen',
    HE_TI = 'heTi',
    DONG_XU = 'dongXu',
    DA_CHENG = 'daCheng',
    DU_JIE = 'duJie',
    DI_XIAN = 'diXian',
    XUAN_XIAN = 'xuanXian',
    JIN_XIAN = 'jinXian',
    XIAN_JUN = 'xianJun',
    XIAN_ZUN = 'xianZun',
    XIAN_DI = 'xianDi',
    HONG_MENG = 'hongMeng',
}

// 每层体系所需修为
enum StageItemCapcity {
    'lianQi' = 100,
    'zhuJi' = 200,
    'jieDan' = 500,
    'yuanYing' = 1000,
    'huaShen' = 2000,
    'heTi' = 5000,
    'dongXu' = 10000,
    'daCheng' = 20000,
    'duJie' = 50000,
    'diXian' = 100000,
    'xuanXian' = 200000,
    'jinXian' = 500000,
    'xianJun' = 1000000,
    'xianZun' = 2000000,
    'xianDi' = 5000000,
    'hongMeng' = 10000000,
}

const stageTypeIdentity = {
    'lianQi': '炼气',
    'zhuJi': '筑基',
    'jieDan': '结丹',
    'yuanYing': '元婴',
    'huaShen': '化神',
    'heTi': '合体',
    'dongXu': '洞虚',
    'daCheng': '大乘',
    'duJie': '渡劫',
    'diXian': '地仙',
    'xuanXian': '玄仙',
    'jinXian': '金仙',
    'xianJun': '仙君',
    'xianZun': '仙尊',
    'xianDi': '仙帝',
    'hongMeng': '鸿蒙',
};

export { StageType, StageItemCapcity ,stageTypeIdentity};