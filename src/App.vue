<template>
	<div id="app">
		<div id="nav">
			<span v-if="isAuthenticated">
				<router-link to="/">Accueil</router-link>
				|
				<router-link to="/events">Evénements</router-link>
				|
				<a href="#" @click.prevent="onLogout">Déconnexion</a>
			</span>
		</div>
		<div class="alert alert-info" v-if="isBusy">Chargement...</div>
		<div class="alert alert-danger" v-if="error">{{ error }}</div>

		<router-view />
	</div>
</template>

<script>
import store from "@/store";
import { computed } from "vue";

export default {
	name: 'App',
	setup() {
		return {
			isBusy: computed(() => store.state.isBusy),
			error: computed(() => store.state.error),
			isAuthenticated: computed(() => store.getters.isAuthenticated),
			onLogout: () => store.dispatch("logout")
		}
	}

}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	height: 100%;
}

#nav {
	padding: 20px;
}
</style>
