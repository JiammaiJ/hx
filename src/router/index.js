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
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
