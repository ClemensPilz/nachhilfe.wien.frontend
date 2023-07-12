import { createRouter, createWebHistory } from 'vue-router'
import InboxView from "@/views/InboxView.vue";
import DashboardView from "@/views/DashboardView.vue";
import SearchView from "@/views/SearchView.vue";
import TestView from "@/views/TestView.vue";
import SettingsView from "@/views/SettingsView.vue";
import ProfileView from "@/views/ProfileView.vue";
import AboutUsView from "@/views/AboutUsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TestView
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: InboxView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/profile/:userId',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUsView
    }
  ]
})

export default router
