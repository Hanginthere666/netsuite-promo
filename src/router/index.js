import { createRouter, createWebHistory } from 'vue-router'

// 创建页面组件
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
// const Services = () => import('../views/Services.vue')
// const Contact = () => import('../views/Contact.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 