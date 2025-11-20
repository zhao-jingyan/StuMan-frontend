import LoginPage from '@/views/LoginPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import ManagePage from '@/views/ManagePage.vue';
import Home from '@/views/Home.vue';
import { createWebHistory, createRouter } from 'vue-router'

const isAuthenticated = true;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpPage
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfilePage
    },
    { path: '/manage',
      name: "Manage",
      component: ManagePage
    },
    {
      path: '/:pathMatch(.*)*', // 匹配所有路径
      redirect: '/'
    },

  ],
})

export default router

/*守卫为授权的访问 */
router.beforeEach(async (to, from) => {
  if (!isAuthenticated && to.name !== 'Auth') {
    return { name: 'Auth' };
  }
})