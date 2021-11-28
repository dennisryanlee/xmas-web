<template>
	<div class="container mb-4 mb-lg-5">
		<Overview :userId="user._id" />
		<!-- <Tabs /> -->
		<WishesList :userId="user._id" />
	</div>
</template>

<script>
import fetchApi from "@/services/http";

import Overview from '@/components/Overview.vue'
import WishesList from '@/components/WishesList.vue'

export default {
	name: 'User',
	components: {
		Overview,
		WishesList,
	},
	data() {
		return {
			user: {}
		}
	},
	methods: {
		async getUser(userId) {
			let { data: user = {} } = await fetchApi().get(`/users/${userId}`)
			return user;
		}
	},
	async mounted() {
		let { userId = null } = this.$route.params || {};
		this.user = await this.getUser(userId);
	}
}
</script>

<style lang="scss" scoped>
.user {
	transition: 0.2s;
	padding: 20px;
}
</style>
