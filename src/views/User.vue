<template>
	<div>Bonjour {{ user.name }} !</div>
	<SenderDraws v-if="user._id" :senderId="user._id" :key="user._id" />
</template>

<script>
import fetchApi from "@/services/http";
import SenderDraws from '@/components/SenderDraws.vue'

export default {
	name: 'User',
	components: {
		SenderDraws
	},
	data() {
		return {
			user: {}
		}
	},
	methods: {
		async getUser(userId) {
			let { data: user = {} } = fetchApi().get(`/users/${userId}`)
			return user;
		}
	},
	async mounted() {
		let { userId = null } = this.$route.params || {};
		this.user = await this.getUser(userId);
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
