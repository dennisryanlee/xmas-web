<template>
	<div v-if="draws.length > 0">
		<el-row type="flex" justify="center" align="center" v-for="draw in draws" :key="draw._id">
			<el-col :span="16" :xs="24" style="text-align: center; padding-bottom: 10px">
				<div>{{ draw.sender.name }} offre un cadeau à {{ draw.receiver.name }} pour {{ draw.event.name }}</div>			
			</el-col>
		</el-row>
	</div>
	<div v-else>pas de cadeau à offrir 😔</div>
</template>

<script>
import fetchApi from "@/services/http";

import store from '@/store';

export default {
	name: 'DrawsList',
	props: {
		eventId: String,
		userId: String,
		memberId: String
	},
	data() {
		return {
			draws: []
		}
	},
	methods: {
		async getUserDraws(userId) {
			let { data: draws = [] } = await fetchApi().get(`/users/${userId}/draws`);
			return draws;
		},
		async getMemberDraws(memberId) {
			let { data: draws = [] } = await fetchApi().get(`/members/${memberId}/draws`);
			return draws;
		},
		async getEventDraws(eventId) {
			let { data: draws = [] } = await fetchApi().get(`/events/${eventId}/draws`);
			return draws;
		}
	},
	async mounted() {
		if (this.userId) this.draws = await this.getUserDraws(this.userId)
		else if (this.memberId) this.draws = await this.getMemberDraws(this.memberId)
		else this.draws = await this.getEventDraws(this.eventId);
	},
	computed: {
		currentUser: () => store.getters.getUser
	}
}
</script>
