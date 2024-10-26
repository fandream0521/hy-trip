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
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/profile/Profile.vue')
        }
    ]
})

export default router