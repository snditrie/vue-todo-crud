import { createRouter, createWebHistory } from 'vue-router';
import TodoList from '@/components/TodoList.vue';
import TodoDetail from '@/components/TodoDetail.vue';

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/todo/:id',
    name: 'TodoDetail',
    component: TodoDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
