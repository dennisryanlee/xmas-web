import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";

import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import User from "@/views/User.vue";
import Event from "@/views/Event.vue";
import Events from "@/views/Events.vue";

import NotFound from "@/views/NotFound.vue";

const authGuard = (to, from, next) => {
	if (store.getters.isAuthenticated) next();
	else next("/login")
};


const routes = [
	{
		path: "/login",
		name: "Login",
		component: Login,
		beforeEnter: (to, from, next) => {
			if (store.getters.isAuthenticated) next("/")
			next();
		}
	},
	{
		path: "/",
		name: "Home",
		component: Home,
		beforeEnter: authGuard
	},
	// { path: '/events', component: Events, props: true },
	{
		path: "/events",
		name: "Events",
		components: Events,
		beforeEnter: authGuard
	},
	{
		path: "/events/:eventId",
		name: "Event",
		component: Event,
		beforeEnter: authGuard
	},
	{
		path: "/users/:userId",
		name: "User",
		component: User,
		beforeEnter: authGuard
	},
	{
		path: "/:catchAll(.*)",
		component: NotFound,
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// Clear the error on every navigation
router.afterEach(() => {
	store.commit("clearError");
});

export default router;