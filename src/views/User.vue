<template>
	<div>Bonjour {{ user.name }} !</div>
	<SenderDraws v-if="user._id" :senderId="user._id" :key="user._id" />
</template>

<script>
import createHttp from "@/services/http";
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
		getUser() {
			let { userId = null } = this.$route.params || {};

			let http = createHttp(true);
			http.get(`/users/${userId}`)
				.then(res => {
					let { data: user = {} } = res || {};
					this.user = user;
				})
				.catch(err => { console.log('ERROR: error while getting info', err) })
		}
	},
	mounted() {
		this.getUser();
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
