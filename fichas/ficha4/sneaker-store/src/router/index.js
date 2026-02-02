import AboutView from '@/views/AboutView.vue'
import AllProductsView from '@/views/AllProductsView.vue'
import CategoryView from '@/views/CategoryView.vue'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
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
      path: '/shop',
      name: 'shop',
      component: ShopView,
      children: [
        {
          path: '',
          component: AllProductsView
        },
        {
          path: 'category/:name',
          name: 'category',
          component: CategoryView
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ],
})

export default router
