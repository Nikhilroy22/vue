import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import edit from '../views/edit.vue'
import { useCounterStore } from '../stores/userstore';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, meta: { auth: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorView',
      component: () => import('../components/Error.vue'),
  },
    {
      path: '/read',
      name: 'read',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/read.vue'), meta: { auth: true },
    },
     {
      path: '/odds',
      name: 'odds',
     
      component: () => import('../views/odds.vue')
    },
    {
      path: '/bet',
      name: 'bet',
     
      component: () => import('../views/Beting.vue')
    },
     {
      path: '/work',
      name: 'work',
     
      component: () => import('../views/Work.vue')
    },
     {
      path: '/student/edit/:id',
      name: 'edit',
       component: edit
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },
      {
      path: '/addpost',
      name: 'addpost',
      component: () => import('../views/addpost.vue')
      },
      {
      path: '/pp',
      name: 'pp',
      component: () => import('../views/Njload.vue')
      },
       {
      path: '/:id',
      name: 'postview',
      component: () => import('../views/PostView.vue')
      },
      {
      path: '/category/:slug',
      name: 'category',
      component: () => import('../views/CategoryView.vue')
      },
      ]
});

/*router.beforeEach((to, from, next) => {
  const authStore = useCounterStore();
  if (!to.meta.auth && localStorage.getItem('token') || 0) {
    next('/');
  }  
  else if(to.meta.auth && !localStorage.getItem('token') || 0) {
    next('/login');
  }
  
  else {
    next();
  }
}); */

export default router
