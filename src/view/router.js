// router.js or router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home/Home.vue';
import Chat from '../pages/chat/Chat.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/chat/:id',
    name: 'chat',
    component: Chat, props: true
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// Add a beforeEnter guard to redirect from home to a default chat
router.beforeEach((to, from, next) => {
  if (to.name === 'Home') {
    // Redirect to a default chat (replace '1' with the desired default chat id)
    next({ name: 'chat', params: { id: '1' } });
  } else {
    next();
  }
});
export default router;
