import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import User from "@/views/User.vue";

import Event from "@/views/Event.vue";
import Events from "@/views/Events.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/events",
		name: "Events",
		component: Events,
	},
	{
		path: "/events/:eventId",
		name: "Event",
		component: Event,
	},
	{
		path: "/users/:userId",
		name: "User",
		component: User,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;