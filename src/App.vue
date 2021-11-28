<template>
	<div>
		<Nav v-if="isAuthenticated" />
		<div v-if="isBusy">Chargement...</div>
		<div v-if="error">{{ error }}</div>
		<router-view :key="$route.path" class="router-view" />
		<Footer />
	</div>
</template>

<script>
import store from "@/store";
import { computed } from "vue";

import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'App',
	components: {
		Nav,
		Footer
	},
	setup() {
		return {
			isBusy: computed(() => store.state.isBusy),
			error: computed(() => store.state.error),
			isAuthenticated: computed(() => store.getters.isAuthenticated),
			onLogout: () => store.dispatch("logout"),
			currentUser: computed(() => store.getters.getUser)
		}
	},

}
</script>
