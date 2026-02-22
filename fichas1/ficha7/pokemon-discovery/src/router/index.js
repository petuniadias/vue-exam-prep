import HomeView from '@/views/HomeView.vue'
import PokemonDetailView from '@/views/PokemonDetailView.vue'
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
      path: '/pokemon/:id',
      name: 'pokemon-detail',
      component: PokemonDetailView
    }
  ],
})

export default router
