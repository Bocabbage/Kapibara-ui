import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        meta: { requireAuthentication: true },
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path: "/login",
        name: "login",
        component: () => import('@/pages/LoginPage.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    /* [Todo] login-state check */
    if(to.meta.requireAuthentication && false)
    {
        next({name: "login", query: {redirect: to.fullPath}})
    }
    else
    {

    }
})

export default router
