import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import User from "@/views/User.vue";
import Event from "@/views/Event.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/event/:eventId?",
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