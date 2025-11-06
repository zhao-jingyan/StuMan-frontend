import SheetManager from '@/auth/SheetManager.vue'
import Home from '@/manage/Home.vue';
import Profile from '@/profile/ProfileSheet.vue'
import ProfileView from '@/profile/ProfileView.vue';
import { createWebHistory, createRouter } from 'vue-router'

const isAuthenticated = true;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Auth',
      name: 'Auth',
      component: SheetManager
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView
    },
    {
      path: '/:pathMatch(.*)*', // 匹配所有路径
      redirect: '/'
    }
  ],
})

export default router

/*守卫为授权的访问 */
router.beforeEach(async (to, from) => {
  if (!isAuthenticated && to.name !== 'Auth') {
    return { name: 'Auth' };
  }
})