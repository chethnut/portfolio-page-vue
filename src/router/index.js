import { createRouter as createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import MyProjectsView from '../views/MyProjectsView.vue';


const routes = [
  {
    path: '/',
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
