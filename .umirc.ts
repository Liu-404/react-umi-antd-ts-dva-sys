import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        {
            path: '/',
            component: '@/layouts/BasicLayout',
            routes: [
                {
                    name: '工作台',
                    path: '/home',
                    component: '@/pages/home/Platform',
                    isShowMeun: true,
                },
                {
                    name: '设备管理',
                    path: '/equipment',
                    isShowMeun: true,
                    routes: [
                        {
                            name: '设备',
                            path: '/device',
                            component: '@/pages/equipment/Device',
                            isShowMeun: true,
                        },
                        {
                            name: '网关',
                            path: '/gateway',
                            component: '@/pages/equipment/Gateway',
                            isShowMeun: true,
                        },
                    ],
                },
            ],
        },
    ],
    fastRefresh: {},
    dva: {},
});
