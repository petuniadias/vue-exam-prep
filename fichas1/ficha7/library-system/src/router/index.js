import BookDetailView from '@/views/BookDetailView.vue'
import BookFormView from '@/views/BookFormView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books/new',
      name: 'book-new',
      component: BookFormView
    },
    {
      path: '/books/:id',
      name: 'book-detail',
      component: BookDetailView
    },
    {
      path: '/books/:id/edit',
      name: 'book-edit',
      component: BookFormView
    }
  ],
})

export default router
