import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "../views/Signup.vue"
import Login from "../views/Login.vue"
import Logout from "../views/Logout.vue"
import CharitiesIndex from "../views/CharitiesIndex.vue"
import CharitiesShow from "../views/CharitiesShow.vue"
import ChosenIndex from "../views/ChosenIndex.vue"
import ChosenNew from "../views/ChosenNew.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: "/signup",
    name: "signup",
    component: Signup
  },
  { 
    path: "/login",
    name: "login",
    component: Login 
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout 
  },
  {
    path: "/charities",
    name: "charities-index",
    component: CharitiesIndex
   },
   {
     path: "/charities-show",
     name: "charities-show",
     component: CharitiesShow
    },
    {
     path: "/chosen",
     name: "chosens-index",
     component: ChosenIndex
    },
    {
    path: "/chosen/new",
    name: "chosen-new",
    component: ChosenNew
    },
    {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
