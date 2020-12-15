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
		<div class="xmas__picture"></div>

		<div class="alert alert-info" v-if="isBusy">Chargement...</div>
		<div class="alert alert-danger" v-if="error">{{ error }}</div>

		<router-view :key="$route.path" class="router-view"/>
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
@keyframes snow {
	0% {
		background-position: 0px 0px, 0px 0px;
	}
	100% {
		background-position: 500px 1000px, 400px 400px;
	}
}
@-moz-keyframes snow {
	0% {
		background-position: 0px 0px, 0px 0px;
	}
	100% {
		background-position: 500px 1000px, 400px 400px;
	}
}
@-webkit-keyframes snow {
	0% {
		background-position: 0px 0px, 0px 0px;
	}
	100% {
		background-position: 500px 1000px, 400px 400px;
	}
}
@-ms-keyframes snow {
	0% {
		background-position: 0px 0px, 0px 0px;
	}
	100% {
		background-position: 500px 1000px, 400px 400px;
	}
}

body {
	margin: 0px;
	font-size: 1rem;
	line-height: 1.5;
	background: #fff;
	color: #3f4564;

	&::before {
		content: "";
		z-index: -1;
		position: absolute;
		background: url(./assets/xmas.png) no-repeat;
		background-size: cover;
		height: 50vh;
		width: 100%;

		@media only screen and (max-width: 600px) {
			margin-top: 15vh;
		}
	}
}

.router-view {
	margin-top: 40vh;
}

.router-link-active {
	color: #f56c6c;
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
		bottom: 0px;
		left: 0px;

		background: url(./assets/flocons.svg) no-repeat;
		background-size: 500px 500px;

		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
	}
}

#nav {
	padding: 20px;
}

a {
	color: #2a7372;
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