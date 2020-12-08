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
import createHttp from "@/services/http";

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
	mounted() {
		let http = createHttp(true);
		http.get('/draws', { params: { senderId: this.senderId } })
			.then(res => {
				let { data: senderDraws = [] } = res || {};
				this.senderDraws = senderDraws;
			})
			.catch(err => { console.log('ERROR: SenderDraws.vue#mounted - Error while getting draws:', err); })
	}
}
</script>

<style scoped></style>
