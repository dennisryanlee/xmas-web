<template>
	<div>Bonjour {{ user.name }} !</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'User',
	data() {
		return {
			user: {}
		}
	},
	mounted() {
		let { userId = null } = this.$route.params || {};

		// if (!userId) this.$notify.error({ title: 'Error', message: 'This is an error message' });

		axios.get(`http://localhost:5000/v1/xmas/users/${userId}`)
			.then(res => {
				let { data: user = {} } = res || {};
				this.user = user;

				console.log('user=', user);
			})
			.catch(err => { console.log('ERROR: error while getting info', err) })
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
