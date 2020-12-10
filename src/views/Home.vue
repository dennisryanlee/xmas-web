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
	<WishesList v-if="user._id" :userId="user._id"/>

	<br />
	<br />
	<br />
</template>

<script>
import fetchApi from "@/services/http";
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
	methods: {
		async getUser(userId) {
			let { data: user = null } = await fetchApi().get(`/users/${userId}`);
			return user;
		}
	},
	computed: {
		currentUser: () => store.getters.getUser
	},
	async mounted() {
		let { _id: userId = null } = this.currentUser || {};
		this.user = await this.getUser(userId);
	},
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
