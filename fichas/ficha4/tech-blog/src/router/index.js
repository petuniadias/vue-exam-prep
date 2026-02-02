import ArticleListView from '@/views/ArticleListView.vue'
import ArticleView from '@/views/ArticleView.vue'
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
      path: '/article-list',
      name: 'article-list',
      component: ArticleListView
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleView,
    }
  ],
})

export default router
