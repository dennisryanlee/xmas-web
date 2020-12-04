<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16">
			<EventForm />
		</el-col>
	</el-row>
</template>

<script>
import EventForm from '@/components/EventForm.vue'
import axios from 'axios'

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
		axios.get('http://localhost:5000/v1/xmas/users')
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
