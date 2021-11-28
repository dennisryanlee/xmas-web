<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16" :xs="24">
			<div class="events">
				<h3>Les Evènements ❄</h3>
				<el-divider></el-divider>
				<br />
				<el-button type="primary" icon="el-icon-circle-plus-outline" @click="goToCreateEvent">Nouveau</el-button>
				<br />
				<br />
				<br />
				<el-row type="flex" justify="center">
					<el-col type="flex">
						<EventsList />
					</el-col>
				</el-row>
			</div>
		</el-col>
	</el-row>
</template>

<script>
import EventsList from '@/components/EventsList.vue';
import router from '@/router';

export default {
	name: 'Events',
	components: {
		EventsList
	},
	methods: {
		goToCreateEvent() {
			router.push({ name: 'NewEvent' });
		}
	}
}
</script>

<style lang="scss" scoped>
.events {
	transition: 0.2s;
	padding: 20px;
}
</style>
