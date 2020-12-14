<template>
	<el-row type="flex" align="center" justify="center">
		<el-timeline>
			<el-timeline-item v-for="(event, index) in events" :key="index" :timestamp="event.when">
				<router-link :to="{ name: 'Event', params: { eventId: event._id } }">{{ event.name }}</router-link>
			</el-timeline-item>
		</el-timeline>
	</el-row>
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
.el-timeline {
	font-size: 20px;
}
</style>
