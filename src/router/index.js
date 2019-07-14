import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/landing',
            name:'landing',
            component: () => import('@/components/Landing')
        },
        {
            path:'/home',
            name:'home',
            component: () => import('@/components/Home')
        },
        {
            path:'/profile',
            name:'profile',
            component: () => import('@/components/Profile')
        },
        {
            path:'/signup',
            name:'signup',
            component: () => import('@/components/Signup')
        },
    ]
})

export default router;