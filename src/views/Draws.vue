<template>
	<div>
		<el-row type="flex" justify="center">
			<el-col type="flex" :span="16" :xs="24">
				<h3>Résultats</h3>
				<el-divider></el-divider>
				<br />

				<EventDraws v-if="eventId" :eventId="eventId" />
			</el-col>
		</el-row>
	</div>
</template>

<script>
import fetchApi from "@/services/http";
import EventDraws from '@/components/EventDraws.vue';

export default {
	name: 'Draws',
	components: {
		EventDraws
	},
	data() {
		return {
			users: [],
			eventId: null
		}
	},
	methods: {
		async getUsers() {
			let { data: users = [] } = await fetchApi().get('/users');
			return users;
		}
	},
	async mounted() {
		let { eventId = null } = this.$route.params || {};
		this.eventId = eventId;
		this.users = await this.getUsers();
	}
}
</script>

<style>
</style>
