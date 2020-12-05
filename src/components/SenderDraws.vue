<template>
	<div class="sender-draws">
		<div v-for="senderDraw in senderDraws" :key="senderDraw._id">
			<div>
				Tu vas devoir offrir un cadeau lors de <strong>{{ senderDraw.event.name }}</strong> à <strong>{{ senderDraw.receiver.name }}</strong>
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
		http.get(`http://localhost:5000/v1/xmas/draws`, { params: { senderId: this.senderId } })
			.then(res => {
				let { data: senderDraws = [] } = res || {};
				this.senderDraws = senderDraws;
			})
			.catch(err => { console.log('ERROR: SenderDraws.vue#mounted - Error while getting draws:', err); })
	}
}
</script>

<style scoped></style>
