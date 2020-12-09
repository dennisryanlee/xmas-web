<template>
	<el-button type="primary" icon="el-icon-edit" @click="goToCreateEvent">Nouveau</el-button>

	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16">
			<EventsList :events="events" />
		</el-col>
	</el-row>
</template>

<script>
import fetchApi from "@/services/http";
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
		goToCreateEvent() {
			this.$router.push({ name: 'Event', params: { eventId: 'new' } });
		},
		async getEvents() {
			let { data: events = [] } = await fetchApi().get('/events')
			return events;
		}
	},
	async mounted() {
		this.events = await this.getEvents();
	}
}
</script>

<style>
</style>
