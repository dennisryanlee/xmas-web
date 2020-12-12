<template>
	<div class="users-list">
		<h3>La Famille</h3>
		<br />
		<el-divider></el-divider>
		<br />
		<div v-for="user in users" :key="user._id">
			<router-link :to="{ name: 'User', params: { userId: user._id } }">{{ user.name }}</router-link>
		</div>
	</div>
</template>

<script>
import fetchApi from "@/services/http";

export default {
	name: 'UsersList',
	data() {
		return {
			users: []
		}
	},
	methods: {
		async getUsers() {
			let { data: users = [] } = await fetchApi().get('/users');
			return users;
		}
	},
	async mounted() {
		this.users = await this.getUsers();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
