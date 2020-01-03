import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const cart=()=>import('../views/cart/Cart.vue')
const category=()=>import('../views/category/Category.vue')
const home=()=>import('../views/home/Home.vue')
const profile=()=>import('../views/profile/Profile.vue')

const routes=[
  {
    path:'',
    redirect:"/home"
  },
  {
    path:"/home",
    component:home
  },
  {
    path:"/cart",
    component:cart
  },
  {
    path:"/category",
    component:category
  },
  {
    path:"/profile",
    component:profile
  }
]
export default new Router({
  routes,
  mode:"history"
})
