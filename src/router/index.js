import Vue from 'vue'
import Router from 'vue-router'
//搭建一级路由
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import About from '@/components/About'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Register from '@/components/Register'
// 搭建二级路由
import Activity from '@/components/About/Activity'
import Contact from '@/components/About/Contact'
import Delivery from '@/components/About/Delivery'
import History from '@/components/About/History'

//搭建三级路由
import Address from '@/components/About/Contact/Address'
import Person from '@/components/About/Contact/Person'
import Telphone from '@/components/About/Contact/Telphone'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            components: {
                default: Home,
                'history': History,
                'delivery': Delivery
            }
        },
        {
            path: '/menu',
            name: 'Menu',
            component: Menu
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            //默认跳转路由
            redirect: '/contact',
            children: [{ //二级路由
                    path: '/history',
                    name: 'History',
                    component: History
                },
                {
                    path: '/activity',
                    name: 'Activity',
                    component: Activity
                },
                {
                    path: '/delivery',
                    name: 'Delivery',
                    component: Delivery
                },
                {
                    path: '/contact',
                    name: 'Contact',
                    component: Contact,
                    //设置默认跳转项
                    redirect: '/address',
                    children: [{ //三级路由
                            path: '/address',
                            name: 'Address',
                            component: Address,
                        },
                        {
                            path: '/person',
                            name: 'Person',
                            component: Person
                        },
                        {
                            path: '/telphone',
                            name: 'Telphone',
                            component: Telphone
                        }
                    ]
                }
            ]
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            // 加上导航守卫
            beforeEnter: (to, from, next) => {
                alert('您正在进入admin页面，请确保有操作权限')
                    // next()//表示继续，允许进入当前路由
                    //next(false)表示不允许进入
                    // next('/register')进入相应页面
                    // to 是到哪里去
                    // from 是从哪里来
                if (sessionStorage.user) {
                    next()
                } else {
                    alert('您还没有登陆，请先登陆')
                    alert('页面正在跳转....')
                    next('/login')
                }
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ],
    mode: "history"
})