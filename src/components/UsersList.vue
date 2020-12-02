<template>
	<div class="users-list">
		<h3>Hello</h3>
		<ul>
			<li>Pauline</li>
			<li>Servane</li>
			<li>Gautier</li>
			<li>Valentine</li>
			<li>Luc</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'UsersList'
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
