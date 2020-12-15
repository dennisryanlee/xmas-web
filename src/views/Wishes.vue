<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16" :xs="24">
			<div class="user">
				<h3>Mes souhaits 🌲</h3>

				<br />
				<el-divider></el-divider>
				<br />

				<WishesList v-if="user._id" :username="user.name" :userId="user._id" />
			</div>
		</el-col>
	</el-row>
</template>

<script>
import fetchApi from "@/services/http";
import WishesList from '@/components/WishesList.vue'

export default {
	name: 'Wishes',
	components: {
		WishesList
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
