import { createRouter, createWebHistory } from 'vue-router'
import userStateApis from '@/store/user'

const routes = [
    {
        path: "/",
        name: "home",
        meta: { requireAuthentication: false },
        component: () => import('@/pages/HomePage.vue'),
    },
    {
        path: "/login",
        name: "login",
        component: () => import('@/pages/LoginPage.vue')
    },
    {
        path: "/admin",
        name: "admin",
        meta: { requireAuthentication: true },
        component: () => import('@/pages/AdminPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requireAuthentication && !userStateApis.isAuthorized()) {
        next({name: "login", query: {redirect: to.fullPath}})
    } else if(to.name === "login" && userStateApis.isAuthorized()) {
        next({name: "home", query: {redirect: to.fullPath}})
    } else {
        next()
    }
})

export default router
