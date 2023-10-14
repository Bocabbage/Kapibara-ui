import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from "../pages/LoginPage.vue"

const routes = [
    { path: "/", component: LoginPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
