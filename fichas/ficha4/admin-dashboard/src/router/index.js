import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import OverviewView from '@/views/OverviewView.vue'
import SettingsView from '@/views/SettingsView.vue'
import UserDetailView from '@/views/UserDetailView.vue'
import UsersView from '@/views/UsersView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      children: [
        {
          path: '',
          component: OverviewView
        },
        {
          path: 'users',
          component: UsersView
        },
        {
          path: 'users/:id',
          component: UserDetailView
        },
        {
          path: 'settings',
          component: SettingsView
        }
      ]
    }
  ],
})

export default router
