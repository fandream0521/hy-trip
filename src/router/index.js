// router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/Home.vue')
        },
        {
            path: '/favor',
            name: 'favor',
            component: () => import('@/views/favor/Favor.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('@/views/order/Order.vue')
        },
        {
            path: '/message',
            name: 'message',
            component: () => import('@/views/message/Message.vue')
        },
        {
            path: '/city',
            name: 'city',
            component: () => import('@/views/city/CityVant.vue'),
            meta: {
                isHideTabBar: false
            }
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('@/views/search/Search.vue'),
            meta: {
                isHideTabBar: true
            }
        }, 
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import('@/views/detail/Detail.vue'),
        }
    ]
})

export default router