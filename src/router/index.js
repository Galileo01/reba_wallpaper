import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: '热巴壁纸' },
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title)
    document.title = to.meta.title;
    next();
})

export default router
