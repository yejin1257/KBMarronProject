import { createRouter, createWebHistory } from 'vue-router';
import TodoList from '@/pages/TodoList.vue';
import Home from '@/pages/Home.vue';
import AddTodo from '@/pages/AddTodo.vue';
import EditTodo from '@/pages/EditTodo.vue';
import NotFound from '@/pages/NotFound.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/todos', component: TodoList },
    { path: '/todos/add', component: AddTodo },
    { path: '/todos/edit/:id', component: EditTodo },
    { path: '/:paths(.*)*', component: NotFound },
  ],
});
export default router;
