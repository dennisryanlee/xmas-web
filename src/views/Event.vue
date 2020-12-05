<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16" :xs="24">
			<EventForm />
		</el-col>
	</el-row>
</template>

<script>
import createHttp from "@/services/http";
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
	mounted() {
		let http = createHttp(true);
		http.get('/users')
			.then(res => {
				let { data: users = [] } = res || {};
				this.users = users;
			})
			.catch(err => { console.log('ERROR: error while getting info', err) })
	}
}
</script>

<style>
</style>
