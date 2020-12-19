<template>
	<div>
		<el-row type="flex" justify="center" :span="24" :xs="24">
			<EventForm />
		</el-row>
	</div>
</template>

<script>
import EventForm from '@/components/EventForm.vue';

export default {
	name: 'NewEvent',
	components: {
		EventForm
	},
	data() {
		return {
			eventId: null
		}
	},
	async mounted() {
		let { eventId = null } = this.$route.params || {};
		this.eventId = eventId;
	}
}
</script>
