<template>
	<div>
		<Nav v-if="isAuthenticated" />
		<div v-if="isBusy" class="d-flex align-items-center container mb-4 mb-lg-5">
			<strong>Loading...</strong>
			<b-spinner class="ms-auto"></b-spinner>
		</div>
		<b-alert class="container mb-4 mb-lg-5" :show="!!error" variant="danger">
			<span class="text-center text-md-right d-flex justify-content-center">{{error}}</span>
		</b-alert>
		<router-view :key="$route.path"/>
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
