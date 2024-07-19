import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/create',
            component: () => import('../views/CreateUser.vue')
        },
        {
            path:'/login',
            component: () => import('../views/Login.vue')
        },
        {
            path:'/profile',
            component: () => import('../views/Profile.vue')
        }
    ]
})

export default router
