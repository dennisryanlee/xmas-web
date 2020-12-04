<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Accueil</router-link>
			-
			<router-link to="/events">Evénements</router-link>
		</div>
		<el-main>
			<router-view />
		</el-main>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {}
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
