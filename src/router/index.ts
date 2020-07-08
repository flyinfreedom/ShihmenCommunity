import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import {Auth} from '../firebase/auth';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/travel',
    name: 'Travel',
    component: () => import(/* webpackChunkName: "travel" */ '../views/Travel.vue')
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: () => import(/* webpackChunkName: "introduction" */ '../views/Introduction.vue')
  },
  {
    path: '/env-protection',
    name: 'EnvProtection',
    component: () => import(/* webpackChunkName: "env-protection" */ '../views/EnvProtection.vue')
  },
  {
    path: '/industry',
    name: 'Industry',
    component: () => import(/* webpackChunkName: "industry" */ '../views/Industry.vue')
  },
  {
    path: '/welfare',
    name: 'Welfare',
    component: () => import(/* webpackChunkName: "welfare" */ '../views/Welfare.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
  },
  {
    path: '/admin',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "admin.layout" */ '../components/admin/Layout.vue'),
    children: [
      {
        path: '',
        name: 'News',
        component: () => import(/* webpackChunkName: "admin.news" */ '../components/admin/News.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth){  
    Auth.onAuthStateChanged(user => {
      if (user) {
        next();
      } else {
        next('Signin');
      }
    });
  }else{
    next();
  }
});

export default router
