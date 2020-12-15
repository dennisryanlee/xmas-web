<template>
	<div class="sender-draws">
		<el-row type="flex" justify="center" align="center" v-for="eventDraw in eventDraws" :key="eventDraw._id">
			<el-col :span="12" :xs="24" style="text-align: center; padding-bottom: 10px">
				{{ eventDraw.sender._id === this.currentUser._id ? `Tu offres` : `${eventDraw.sender.name} va choisir un cadeau` }} à <router-link :key="$route.fullPath" :to="{ name: 'User', params: { userId: eventDraw.receiver._id } }">{{ eventDraw.receiver.name }}</router-link> pour <strong>{{ eventDraw.event.name }}</strong>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import fetchApi from "@/services/http";

import store from '@/store';

export default {
	name: 'EventDraws',
	props: {
		eventId: String
	},
	data() {
		return {
			eventDraws: []
		}
	},
	methods: {
		async getEventDraws(eventId) {
			let { data: eventDraws = [] } = await fetchApi().get(`/events/${eventId}/draws`);
			return eventDraws;
		}
	},
	async mounted() {
		this.eventDraws = await this.getEventDraws(this.eventId);
	},
	computed: {
		currentUser: () => store.getters.getUser
	}
}
</script>

<style scoped></style>
