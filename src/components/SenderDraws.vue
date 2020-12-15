<template>
	<div v-if="senderDraws.length > 0">
		<el-row type="flex" justify="center" align="center" v-for="senderDraw in senderDraws" :key="senderDraw._id">
			<el-col :span="16" :xs="24" style="text-align: center; padding-bottom: 10px">
				{{ senderDraw.sender._id === this.currentUser._id ? `Tu offres` : `${senderDraw.sender.name} offre` }} un cadeau à <router-link :key="$route.fullPath" :to="{ name: 'User', params: { userId: senderDraw.receiver._id } }">{{ senderDraw.receiver.name }}</router-link> pour <router-link :key="$route.fullPath" :to="{ name: 'Event', params: { eventId: senderDraw.event._id } }">{{ senderDraw.event.name }}</router-link>
			</el-col>
		</el-row>
	</div>
	<div v-else>{{ senderId === this.currentUser._id ? `Tu n'as pas` : `Il n'a pas` }} encore de cadeau à offrir 😔</div>
</template>

<script>
import fetchApi from "@/services/http";

import store from '@/store';

export default {
	name: 'SenderDraws',
	props: {
		senderId: String
	},
	data() {
		return {
			senderDraws: []
		}
	},
	methods: {
		async getSenderDraws(senderId) {
			let { data: senderDraws = [] } = await fetchApi().get('/draws', { params: { senderId: senderId } });
			return senderDraws;
		}
	},
	async mounted() {
		this.senderDraws = await this.getSenderDraws(this.senderId);
	},
	computed: {
		currentUser: () => store.getters.getUser
	}
}
</script>

<style scoped></style>
