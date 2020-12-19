<template>
	<el-col type="flex" align="center" justify="center">
		<el-row v-for="(event, index) in events" :key="index">
			<el-row>
				<router-link :to="{ name: 'Event', params: { eventId: event._id } }">{{ event.name }}</router-link>
				|
				<router-link v-if="event._id" :to="{ name: 'EventDraws', params: { eventId: event._id } }">Résultats</router-link>
			</el-row>

			<div v-for="(draw, index) in event.draws" :key="index">
				<div>{{ draw.sender.name }} offre un cadeau à {{ draw.receiver.name }}</div>
			</div>
			<el-divider style="max-width: 50px"></el-divider>
		</el-row>
	</el-col>
</template>

<script>
import fetchApi from "@/services/http";
import store from '@/store';

export default {
	name: 'EventsList',
	data() {
		return {
			events: []
		}
	},
	methods: {
		async getEvents(userId) {
			let { data: events = [] } = await fetchApi().get(`/users/${userId}/events`)
			return events;
		}
	},
	computed: {
		currentUser: () => store.getters.getUser
	},
	async mounted() {
		let { _id: userId = null } = this.currentUser || {};
		this.events = await this.getEvents(userId);
	}
}
</script>