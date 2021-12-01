<template>
	<Overview title="Evènements" description="Liste des évènements et occasion" :avatar="false" />
	<EventsList :events="events" />
</template>

<script>
import fetchApi from "@/services/http";
import store from '@/store';

import Overview from '@/components/Overview.vue';
import EventsList from '@/components/EventsList.vue';

export default {
	name: 'Events',
	components: {
		EventsList,
		Overview
	},
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
