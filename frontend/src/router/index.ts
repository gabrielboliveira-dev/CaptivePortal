import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/portal' 
    },
    {
      path: '/portal',
      name: 'captive-portal',
      component: () => import('../views/TermsOfService.vue') 
    }
  ]
});

export default router;