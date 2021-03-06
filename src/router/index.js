import {createRouter, createWebHistory} from 'vue-router'

import {toRaw, computed} from "vue";

const routes = [{path: '/login', name: 'login', component: () => import('@/views/login/index.vue')}, {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [{path: '/home', name: 'home', component: () => import('@/views/home/index.vue')},
        {path: '/page1', name: 'page1', component: () => import('@/views/page1/index.vue')},
        {path: '/page2', name: 'page2', component: () => import('@/views/page2/index.vue')}
    ]
}]

const router = createRouter({
    history: createWebHistory(), //createWebHashHistory(),
    routes
})
/**
 * 验证是否登录
 */
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
               /*let store :any = state.state;
                let token  =  store.loginCheck.token != null && store.loginCheck.token != ''  ;
        // console.log(state.getters["loginCheck/getToken"])
        if (!token) {
            next('/login')
        } else {
            next()
        }*/
        next();
    }
})

export default router
