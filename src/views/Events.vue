<template>
	<el-button type="primary" icon="el-icon-edit" @click="createEvent">Nouveau</el-button>

	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16">
			<EventsList :events="events" />
		</el-col>
	</el-row>
</template>

<script>
import createHttp from "@/services/http";
import EventsList from '@/components/EventsList.vue'

export default {
	name: 'Events',
	components: {
		EventsList
	},
	data() {
		return {
			events: []
		}
	},
	methods: {
		createEvent() {
			this.$router.push({ name: 'Event', params: { eventId: 'new' } });
		}
	},
	mounted() {
		let http = createHttp(true);
		http.get('/events')
			.then(res => {
				let { data: events = [] } = res || {};
				this.events = events;
			})
			.catch(err => {
				console.log('ERROR: Events.vue#mounted - Error while getting events:', err);
			})
	}
}
</script>

<style>
</style>
