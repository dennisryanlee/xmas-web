<template>
	<div class="events-list">
		<h3>Evènements:</h3>
		<div v-for="event in events" :key="event._id">
			<router-link :to="{ name: 'Event', params: { eventId: event._id } }">{{ event.name }}</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EventsList',
	props: {
		events: Array
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
