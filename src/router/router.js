import LoginPage from '@/views/LoginPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import ManagePage from '@/views/ManagePage.vue';
import { createWebHistory, createRouter } from 'vue-router'
import StudentList from '@/components/manage/StudentList.vue';
import EditForm from '@/components/manage/EditForm.vue';
import ProfilePage from '@/views/ProfilePage.vue';

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
      path: '/profile',
      name: 'Profile',
      component: ProfilePage
    },
    { path: '/manage/:classid',
      component: ManagePage,
      children: [
        {
          path:'',
          name:'Manage',
          component: StudentList
        },
        {
          path:'student/:studentid',
          name:'Edit',
          component: EditForm
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*', // 匹配所有路径
      redirect: '/manage/1'
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