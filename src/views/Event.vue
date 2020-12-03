<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="24">
			<EventGenerator />
		</el-col>
	</el-row>
</template>

<script>
import EventGenerator from '@/components/EventGenerator.vue'
import axios from 'axios'

export default {
	name: 'Home',
	components: {
		EventGenerator
	},
	data() {
		return {
			users: []
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
