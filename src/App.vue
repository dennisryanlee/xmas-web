<template>
	<div id="app__container">
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
		<div class="wave"></div>
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
body {
	margin: 0px;
	font-size: 1rem;
	line-height: 1.5;
	color: #273036;
}

#app {
	&::before {
		z-index: -1;
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
		background: url(./assets/wave.svg) no-repeat;
		background-color: #fff;
		background-size: contain;

		// @media only screen and (max-width: 600px) {
		// 	display: none;
		// }
	}

	&::after {
		z-index: -1;
		content: "";
		opacity: 0.3;
		position: absolute;
		width: 30vw;
		height: 165px;
		right: 0px;
		top: 15vw;
		background: url(./assets/xmas-tree.svg) no-repeat;
		background-color: transparent;
		background-size: contain;

		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
}

#app__container {
	font-family: system-ui, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin-top: 60px;
	&::before {
		z-index: -1;
		opacity: 1;
		content: "";
		position: absolute;
		width: 500px;
		height: 500px;
		top: 0px;
		left: 0px;

		background: url(./assets/flocons.svg) no-repeat;
		background-size: 500px 500px;

		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
	}

	&::after {
		z-index: -1;
		opacity: 0.1;
		content: "";
		position: absolute;
		width: 500px;
		height: 500px;
		bottom: 0px;
		left: 0px;

		background: url(./assets/gifts-reverted.svg) no-repeat;
		background-size: 500px 500px;

		@media only screen and (max-width: 600px) {
			display: none;
		}
	}

	// &::after {
	// 	z-index: -1;
	// 	content: "";
	// 	position: absolute;
	// 	width: 100%;
	// 	height: 500px;
	// 	left: 0px;
	// 	background: url(./assets/wave.svg) no-repeat;
	// 	background-color: #fff;

	// 	@media only screen and (max-width: 600px) {
	// 		display: none;
	// 	}
	// }
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
