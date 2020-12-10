<template>
	<el-row type="flex" justify="center" align="center" v-for="senderDraw in senderDraws" :key="senderDraw._id">
		<el-col :span="16" style="text-align: start">
			{{ senderDraw.sender._id === this.currentUser._id ? `Tu vas` : `${senderDraw.sender.name} va` }} devoir offrir un cadeau lors de <strong>{{ senderDraw.event.name }}</strong> à <router-link :key="$route.fullPath" :to="{ name: 'User', params: { userId: senderDraw.receiver._id } }">{{ senderDraw.receiver.name }}</router-link>
		</el-col>
	</el-row>
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
