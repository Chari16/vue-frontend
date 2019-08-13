import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store.js'


Vue.use(Router)

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/signup',
            name:'signup',
            component: () => import('@/components/Signup'),
            meta: { hideNavigation: true }
        },
        {
            path:'/login',
            name:'login',
            component: () => import('@/components/Login'),
            meta: { hideNavigation: true }
        },
        {
            path:'',
            name:'dashboard',
            component: () => import('@/components/Dashboard'),
            meta: { hideNavigation: true }
        },
        //these routes contains navbar and sidebar
        {
            path:'/home',
            name:'home',
            component: () => import('@/components/Home'),
            meta: { requiresAuth: true },
            children: [
                {
                    path: "profile",
                    name: 'profile',
                    component: () => import('@/components/Profile'),
                    meta: { requiresAuth: true } 
                }
            ]
        }
    ]
})

router.beforeEach( (to,from,next) => {
    // let routerAuthCheck = true;
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //check if usere is authenticated
        if(store.getters.getloggedIn) {
            //user is Authentiated
            //commit to store the user is authenticated
            next()
        }
        else {
            //user is not authenticated
            router.push('/');
        }
    }
    else {
        //Allow
        next()
    }
})

export default router;