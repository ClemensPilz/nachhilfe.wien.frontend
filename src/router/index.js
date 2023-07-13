import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import InboxView from "@/views/InboxView.vue";
import DashboardView from "@/views/DashboardView.vue";
import SearchView from "@/views/SearchView.vue";
import ProfileView from "@/views/ProfileView.vue";
import TestView from "@/views/TestView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import CalendarView from "@/views/CalendarView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/test',
      name: 'tests',
      component: TestView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUsView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
  ]
})

export default router
