import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue';
import Privacy from '../views/Legals/Privacy.vue';
import LegalNotice from '../views/Legals/LegalNotice.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
  },
  {
    path: '/legal',
    name: 'Legal',
    component: LegalNotice,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
