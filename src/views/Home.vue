<template>
	<UsersList :users="users" />
</template>

<script>
import createHttp from "@/services/http";
import UsersList from '@/components/UsersList.vue'

export default {
	name: 'Home',
	components: {
		UsersList
	},
	data() {
		return {
			users: []
		}
	},
	mounted() {
		let http = createHttp(true);

		http.get("/users")
			.then(res => {
				let { data: users = [] } = res || {};
				this.users = users;
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
