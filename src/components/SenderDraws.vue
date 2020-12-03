<template>
	<div class="sender-draws">
		<div v-for="senderDraw in senderDraws" :key="senderDraw._id">
			<div>Vous devez offrir un cadeau lors de <strong>{{senderDraw.event.name}}</strong> à <strong>{{senderDraw.receiver.name}}</strong></div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

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
		console.log('senderId=', this.senderId);

		// if (!userId) this.$notify.error({ title: 'Error', message: 'This is an error message' });

		axios.get(`http://localhost:5000/v1/xmas/draws`, { params: { senderId: this.senderId } })
			.then(res => {
				let { data: senderDraws = [] } = res || {};
				this.senderDraws = senderDraws;

				console.log('senderDraws=', senderDraws);
			})
			.catch(err => { console.log('ERROR: error while getting info', err) })
	}
}
</script>

<style scoped></style>
