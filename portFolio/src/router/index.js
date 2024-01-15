// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/#program',
        name: 'program',
        component: () => import('@/views/Program.vue'),
      },
      {
        path: '/#game',
        name: 'game',
        component: () => import('@/views/Game.vue'),
      },
      {
        path: '/#skill',
        name: 'skill',
        component: () => import('@/views/Skill.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
