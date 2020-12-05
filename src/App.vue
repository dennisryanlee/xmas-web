<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Accueil</router-link>
			-
			<router-link to="/events">Evénements</router-link>
			<span v-if="!isAuthenticated">
				|
				<router-link to="/login">Login</router-link>
			</span>
			<span v-if="isAuthenticated">
				|
				<a href="#" @click.prevent="onLogout">Logout</a>
			</span>
		</div>
		<div class="alert alert-info" v-if="isBusy">Loading...</div>
		<div class="alert alert-danger" v-if="error">{{ error }}</div>

		<el-main>
			<router-view />
		</el-main>
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
}
</style>
