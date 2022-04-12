import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home/index.vue')
const Brewery = () => import('@/views/Brewery/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/brewery/:id',
    name: 'Brewery',
    component: Brewery,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
