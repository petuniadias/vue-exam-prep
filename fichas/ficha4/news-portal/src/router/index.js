import ArticleView from '@/views/ArticleView.vue'
import BannerView from '@/views/BannerView.vue'
import CategoryView from '@/views/CategoryView.vue'
import NewsListView from '@/views/NewsListView.vue'
import SidebarView from '@/views/SidebarView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      alias: '/inicio',
      components: {
        default: NewsListView,
        sidebar: SidebarView,
        banner: BannerView
      }
    },
    {
      path: '/category/:name',
      name: 'category',
      components: {
        default: CategoryView,
        sidebar: SidebarView,
        banner: BannerView
      },
      children: [
        {
          path: 'article/:id',
          name: 'article',
          components: {
            default: ArticleView,
            sidebar: null,
            banner: null
          }
        }
      ]
    }
  ],
})

export default router
