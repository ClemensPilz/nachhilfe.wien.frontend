import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import InboxView from "@/views/InboxView.vue";
import DashboardView from "@/views/DashboardView.vue";
import SearchView from "@/views/SearchView.vue";
import ProfileView from "@/views/ProfileView.vue";
import NotesView from "@/views/NotesView.vue";
import MessageView from "@/views/MessageView.vue";

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
            path: '/profile',
            name: 'profile',
            component: ProfileView
        },
        {
            path: '/mynotes',
            name: 'notes',
            component: NotesView
        },
        {
            path: '/messages',
            name: 'messages',
            component: MessageView
        }

    ]
})

export default router
