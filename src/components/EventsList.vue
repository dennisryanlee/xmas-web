<template>
	<el-col type="flex" align="center" justify="center">
		<el-row v-for="(event, index) in events" :key="index">
			<el-row>
				<router-link :to="{ name: 'Event', params: { eventId: event._id } }">{{ event.name }}</router-link>
				|
				<router-link v-if="event._id" :to="{ name: 'EventDraws', params: { eventId: event._id } }">Résultats</router-link>
			</el-row>

			<div v-for="(draw, index) in event.draws" :key="index">
				<p>{{draw.sender.name}} va chosir un cadeau à {{draw.receiver.name}}</p>
			</div>
			<el-divider style="max-width: 50px"></el-divider>
		</el-row>
	</el-col>
</template>

<script>
import store from '@/store';

export default {
	name: 'EventsList',
	props: {
		events: Array
	},
	computed: {
		currentUser: () => store.getters.getUser
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-timeline {
	font-size: 20px;
}
</style>
