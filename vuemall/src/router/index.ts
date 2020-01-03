import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const cart=()=>import('views/cart/Cart.vue')
const category=()=>import('views/category/Category.vue')
const home=()=>import('views/home/Home.vue')
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


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
