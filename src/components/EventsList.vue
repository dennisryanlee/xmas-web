<template>
	<el-col type="flex" align="center" justify="center">
		<el-row v-for="(event, index) in events" :key="index">
			<router-link :to="{ name: 'Event', params: { eventId: event._id } }">{{ event.name }}</router-link>
			<div v-for="(draw, index) in event.draws" :key="index">
				<p v-if="event.public || currentUser._id === draw.sender._id">{{ currentUser._id === draw.sender._id ? "Tu offres un cadeau à" : `${draw.sender.name} va te chosir un cadeau` }} {{ currentUser._id === draw.receiver._id ? "" : `${draw.receiver.name}` }}</p>
				<p v-else>{{ currentUser._id === draw.sender._id ? "Tu offres un cadeau à" : `Un santa secret va te chosir un cadeau` }} {{ currentUser._id === draw.receiver._id ? "" : `${draw.receiver.name}` }}</p>
			</div>
			<el-divider style="max-width:50px"></el-divider>
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
