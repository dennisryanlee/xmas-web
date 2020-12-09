<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16" :xs="24">
			<EventForm />
		</el-col>
	</el-row>
</template>

<script>
import fetchApi from "@/services/http";
import EventForm from '@/components/EventForm.vue'

export default {
	name: 'Event',
	components: {
		EventForm
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
		this.users = await this.getUsers();
	}
}
</script>

<style>
</style>
