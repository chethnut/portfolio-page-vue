import { createRouter as createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MyProjectsView from '@/views/MyProjectsView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: MyProjectsView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router
