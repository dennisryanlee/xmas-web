<template>
	<div class="users-list">
		<h3>Hello</h3>
		<div v-for="user in users" :key="user">
			<router-link :to="{ name: 'User', params: { userId: user._id } }">{{ user.name }}</router-link>
		</div>

		<el-button>Nouveau tirage au sort</el-button>
	</div>
</template>

<script>
export default {
	name: 'UsersList',
	props: {
		users: Array
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
