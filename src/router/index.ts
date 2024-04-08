import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'


// 2. 配置组件与路径的映射关系
const routes = [
    { // 路由对象
        path: '/main',
        component: () => import('../view/Main.vue') // 懒加载
    },
    {
        path:'/story'  ,
        component:()=>import('../view/Story.vue')
    },
    {
        path:'/mine',
        component:()=>import('../view/Mine.vue')
    },
    // 异常处理
    {
        path: '/:pathMatch(.*)*',
        redirect: '/main' // 配置默认路径
    },
]

// 3. 创建一个路由实例对象
const router = createRouter({
    routes, // 将映射关系挂载到路由对象上
    history: createWebHistory() // 配置路由模式
})

// 4. 导出路由实例
export default router
