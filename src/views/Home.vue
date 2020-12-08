<template>
	<div>Bonjour {{ user.name }} !</div>

	<br />
	<br />
	<br />

	<div>Santa Secret:</div>
	<br />
	<SenderDraws v-if="user._id" :senderId="user._id" />

	<br />
	<br />
	<br />

	<div>Tes souhaits:</div>
	<br />
	<WishesList v-if="user._id" />

	<br />
	<br />
	<br />
</template>

<script>
import createHttp from "@/services/http";
import SenderDraws from '@/components/SenderDraws.vue';
import WishesList from '@/components/WishesList.vue';

import store from '@/store';

export default {
	name: 'Home',
	components: {
		SenderDraws,
		WishesList
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
