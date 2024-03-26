import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
const routes: RouteRecordRaw[] = [
    {
        path: '/', // 页面路径
        name: 'Home', // 页面名称
        component: () => import('../views/HomeIndex.vue'), // 导入的组件
        meta: {
            title: "主页" // 页面标题
        }
    },
    {
        path: '/atlastools',
        name: 'AtlasTools',
        component: () => import('../views/AtlasTools.vue'),
        meta: {
            title: "Atlas解析"
        }
    },
    {
        path: '/harresources',
        name: 'HarResources',
        component: () => import('../views/HarResources.vue'),
        meta: {
            title: "Har资源提取"
        }
    }
];
const router = createRouter({history: createWebHashHistory(), routes});
router.afterEach((titleText) => {
    document.title = titleText.meta.title as string;
})
export default router;