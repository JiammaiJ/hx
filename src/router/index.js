import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
      path:"/",
      redirect:'/home'
    },
    {
      path:"/home",
      component:() => import('@/views/Home')
    },
    {
      path:'/product',
      component:() => import('@/views/Product')
    },
    {
      path:'/programme',
      component:() => import('@/views/Programme')
    },
    {
      path:'/programmeItem',
      name:'programmeItem',
      component:() => import('@/components/ProgrammeItem')
    },
    {
      path:'/about',
      component:() => import('@/views/About')
    }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base:'mobile',
  routes
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // }
})

export default router
