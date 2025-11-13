import LoginPage from '@/views/LoginPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import Header from '@/components/MyHeader.vue';
import ClassesList from '@/main/ClassesList.vue';
import Home from '@/views/Home.vue';
import StudentsList from '@/main/StudentsList.vue';
import EditProfile from '@/profile/EditProfile.vue';
import ProfileView from '@/profile/ProfileView.vue';
import { createWebHistory, createRouter } from 'vue-router'

const isAuthenticated = true;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/header',
      name:'header',
      component : Header
    },
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
      component: ProfileView
    },
    {
      path: '/profile/edit',
      name: "EditProfile",
      component: EditProfile
    },
    {
      path: '/classes/:classNum/students/:studentId/edit',
      name: 'TeacherEdit',
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
      name: 'ManageProfile',
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