<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16" :xs="24">
			<div class="user">
				<h3>Page de {{ user.name }} 🌲</h3>

				<br />
				<el-divider></el-divider>
				<br />

				<SenderDraws v-if="user._id" :senderId="user._id" :key="user._id" />

				<br />
				<el-divider></el-divider>
				<br />

				<h3>Les souhaits de {{user.name}} 🎁</h3>
				<br />

				<WishesList v-if="user._id" :userId="user._id" :username="user.name" />

				<br />
				<br />
				<br />
			</div>
		</el-col>
	</el-row>
</template>

<script>
import fetchApi from "@/services/http";
import SenderDraws from '@/components/SenderDraws.vue'
import WishesList from '@/components/WishesList.vue'

export default {
	name: 'User',
	components: {
		SenderDraws,
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
