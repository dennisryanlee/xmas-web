<template>
	<div>
		<el-row type="flex" justify="center">
			<el-col type="flex" :span="16" :xs="24">
				<EventForm />
			</el-col>
		</el-row>
		<!-- <el-row type="flex" justify="center">
			<el-col type="flex" :span="16" :xs="24">
				<EventDraws v-if="eventId" :eventId="eventId" />
			</el-col>
		</el-row> -->
	</div>
</template>

<script>
import fetchApi from "@/services/http";
import EventForm from '@/components/EventForm.vue';
// import EventDraws from '@/components/EventDraws.vue';

export default {
	name: 'Event',
	components: {
		EventForm,
		// EventDraws
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
