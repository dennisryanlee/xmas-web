import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";

import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import User from "@/views/User.vue";
import Relations from "@/views/Relations.vue";
import Wishes from "@/views/Wishes.vue";
import NewEvent from "@/views/NewEvent.vue";
import Event from "@/views/Event.vue";
import Events from "@/views/Events.vue";
import EventDraws from "@/views/EventDraws.vue";
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
		path: "/register",
		name: "Register",
		component: Register,
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
	{
		path: "/events",
		name: "Events",
		component: Events,
		beforeEnter: authGuard
	},
	{
		path: "/event",
		name: "NewEvent",
		component: NewEvent,
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
		name: "EventDraws",
		component: EventDraws,
		beforeEnter: authGuard
	},
	{
		path: "/relations",
		name: "Relations",
		component: Relations,
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