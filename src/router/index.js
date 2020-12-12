import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";

import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import User from "@/views/User.vue";
import Users from "@/views/Users.vue";
import Event from "@/views/Event.vue";
import Events from "@/views/Events.vue";
import Wishes from "@/views/Wishes.vue";
import Draws from "@/views/Draws.vue";

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
		component: Events,
		beforeEnter: authGuard
	},
	{
		path: "/events/:eventId",
		name: "Event",
		component: Event,
		beforeEnter: authGuard
	},
	{
		path: "/events/:eventId/draws",
		name: "Draws",
		component: Draws,
		beforeEnter: authGuard
	},
	{
		path: "/users",
		name: "Users",
		component: Users,
		beforeEnter: authGuard
	},
	{
		path: "/users/:userId",
		name: "User",
		component: User,
		beforeEnter: authGuard
	},
	{
		path: "/users/:userId/wishes",
		name: "Wishes",
		component: Wishes,
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