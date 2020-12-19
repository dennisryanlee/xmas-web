<template>
	<div>
		<el-row type="flex" justify="center">
			<el-col type="flex" :span="16" :xs="24">
				<h3>Résultats</h3>
				<el-divider></el-divider>
				<br />

				<DrawsList v-if="eventId" :eventId="eventId" />
			</el-col>
		</el-row>
	</div>
</template>

<script>
import DrawsList from '@/components/DrawsList.vue';

export default {
	name: 'EventDraws',
	components: {
		DrawsList
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

<style>
</style>
