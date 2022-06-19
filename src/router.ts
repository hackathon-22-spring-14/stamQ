import { createRouter, createWebHistory } from 'vue-router'
import Create from './components/pages/CreatePage.vue'
import Gallery from './components/pages/GalleryPage.vue'
import Mypage from './components/pages/MyPage.vue'
import LoginPage from './components/pages/LoginPage.vue'
import { api } from './utils/api'
import axios from 'axios'

const routes = [
  { path: '/', name: 'createPage', component: Create },

  { path: '/gallery', name: 'galleryPage', component: Gallery },

  { path: '/mypage', name: 'myPage', component: Mypage },

  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: { isPublic: true },
  },
]

const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
})

router.beforeEach(async (to) => {
  try {
    // await api.whoami()
    await axios.get('/api/users/whoami')
  } catch (_) {
    if (to.meta.isPublic) {
      return true
    }
    return '/login'
  }
  return true
})

export default router
