import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TestingView from '../views/TestingView.vue'
import TestIdView from '../views/TestIdView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/testing',
		name: 'testing',
		component: TestingView
	},
	{
		path: '/test/:id',
		name: 'test-id',
		component: TestIdView,
		props: true
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router


