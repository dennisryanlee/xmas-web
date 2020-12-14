<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16" :xs="24">
			<div class="events">
				<h3>Les Evènements</h3>
				<br />
				<el-divider></el-divider>
				<br />

				<!-- <el-button type="primary" icon="el-icon-circle-plus-outline" @click="goToCreateEvent">Nouveau</el-button> -->

				<el-row type="flex" justify="center">
					<el-col type="flex">
						<EventsList :events="events" />
					</el-col>
				</el-row>
			</div>
		</el-col>
	</el-row>
</template>

<script>
import fetchApi from "@/services/http";
import EventsList from '@/components/EventsList.vue';

import store from '@/store';

export default {
	name: 'Events',
	components: {
		EventsList
	},
	data() {
		return {
			events: []
		}
	},
	methods: {
		goToCreateEvent() {
			this.$router.push({ name: 'Events', query: { new: 'true' } });
		},
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

<style lang="scss" scoped>
.events {
	transition: 0.2s;
	padding: 20px;
}
</style>
