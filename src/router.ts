import { createRouter, createWebHistory } from 'vue-router'
import Create from './components/pages/CreatePage.vue'

const routes = [{ path: '/stamQ/', name: 'createPage', component: Create }]

const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
})

export default router
