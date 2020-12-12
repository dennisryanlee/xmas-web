<template>
	<div id="app">
		<div id="nav">
			<span v-if="isAuthenticated">
				<router-link to="/">Accueil</router-link>
				|
				<router-link :to="{ name: 'Wishes', params: { userId: currentUser._id } }">Mes souhaits</router-link>
				|
				<router-link to="/events">Evénements</router-link>
				|
				<router-link to="/users">Famille</router-link>
				|
				<a href="#" @click.prevent="onLogout">Déconnexion</a>
			</span>
		</div>
		<div class="alert alert-info" v-if="isBusy">Chargement...</div>
		<div class="alert alert-danger" v-if="error">{{ error }}</div>

		<router-view :key="$route.path" />
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
			onLogout: () => store.dispatch("logout"),
			currentUser: computed(() => store.getters.getUser)
		}
	},

}
</script>

<style lang="scss">
html {
	// background-color: #eaefff;
	background-color: #2f344e;
	color: #fff;
}
body {
	font-size: 20px;
}

#app {
	// font-family: Avenir, Helvetica, Arial, sans-serif;
	// font-family: "Source Sans Pro", "Trebuchet MS", "Droid Sans", sans-serif;
	font-family: "Montserrat", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	// color: #2c3e50;
	margin-top: 60px;
	height: 100%;
	&::before {
		z-index: -1;
		opacity: 0.1;
		content: "";
		position: absolute;
		width: 500px;
		height: 500px;
		top: -180px;
		right: 0px;
		background: url(./assets/gifts.svg) no-repeat;
		background-size: 500px 500px;
	}
	&::after {
		z-index: -1;
		content: "";
		opacity: 0.1;
		position: absolute;
		width: 500px;
		height: 500px;
		bottom: 0px;
		left: 0px;
		background: url(./assets/flocons.svg) no-repeat;
		background-size: 500px 500px;
	}
}

#nav {
	padding: 20px;
}

a {
	color: #f56c6c;
	font-weight: 500;
	text-decoration: none;
}

.el-card {
	border: 1px solid #ebeef5;
	background-color: #fff;
	overflow: hidden;
	color: #24336b;
	transition: 0.3s;
	border-radius: 2px;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	overflow: hidden;
	margin: 0px 0 20px 0;
	max-width: 800px;
}
</style>
