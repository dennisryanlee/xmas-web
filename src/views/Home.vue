<template>
	<div>Bonjour {{ user.name }} !</div>
	<SenderDraws v-if="user._id" :senderId="user._id" />
</template>

<script>
import createHttp from "@/services/http";
import SenderDraws from '@/components/SenderDraws.vue'

import store from '@/store';

export default {
	name: 'Home',
	components: {
		SenderDraws
	},
	data() {
		return {
			user: {}
		}
	},
	mounted() {
		let { _id: userId = null } = this.currentUser || {};

		let http = createHttp(true);
		http.get(`/users/${userId}`)
			.then(res => {
				let { data: user = {} } = res || {};
				this.user = user;
			})
			.catch(err => { console.log('ERROR: Home.vue#mounted - Error while getting user:', err); })
	},
	computed: {
		currentUser: () => store.getters.getUser
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
