<template>
	<div class="users-list">
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
