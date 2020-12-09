<template>
	<div class="sender-draws">
		<div v-for="senderDraw in senderDraws" :key="senderDraw._id">
			<div>
				Tu vas devoir offrir un cadeau lors de <strong>{{ senderDraw.event.name }}</strong> à <router-link :key="$route.fullPath" :to="{ name: 'User', params: { userId: senderDraw.receiver._id } }">{{ senderDraw.receiver.name }}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import fetchApi from "@/services/http";

export default {
	name: 'SenderDraw',
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
	}
}
</script>

<style scoped></style>
