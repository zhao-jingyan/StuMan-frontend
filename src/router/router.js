import SheetManager from '@/auth/SheetManager.vue'
import ClassesList from '@/manage/ClassesList.vue';
import Home from '@/manage/Home.vue';
import StudentsList from '@/manage/StudentsList.vue';
import EditProfile from '@/profile/EditProfile.vue';
import ProfileView from '@/profile/ProfileView.vue';
import { createWebHistory, createRouter } from 'vue-router'

const isAuthenticated = true;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/auth',
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
      path: '/classes/:classNum/students/:studentId/edit',
      name: 'Edit',
      component: EditProfile
    },
    {
      path: '/:pathMatch(.*)*', // 匹配所有路径
      redirect: '/'
    },
    {
      path: '/classes/:classNum/students',
      name: 'Students',
      component: StudentsList
    },
    {
      path: '/classes/:classNum/students/:studentId',
      name: 'Profile',
      component: ProfileView
    },
    {
      path: '/classes',
      name: "Classes",
      component: ClassesList
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