<template>
	<UsersList :users="users" />
</template>

<script>
import UsersList from '@/components/UsersList.vue'
import axios from 'axios'

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
		axios.get('http://localhost:5000/v1/xmas/users')
			.then(res => {
				let { data: users = [] } = res || {};
				console.log('users=', users);
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
