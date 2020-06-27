import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import {Auth} from '../firebase/auth';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
