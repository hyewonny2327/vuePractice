import HomePage from '@/views/pages/HomePage.vue';
import RegisterProfile from '@/views/pages/RegisterProfile.vue';
import MyProfile from '@/views/pages/MyProfile.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage,
	},
	{
		path: '/register',
		name: 'register',
		component: RegisterProfile,
	},
	{
		path: '/myprofile',
		name: 'myprofile',
		component: MyProfile,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
