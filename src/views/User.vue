<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16">
			<div class="user">
				<div>Page de {{ user.name }}</div>

				<br />
				<el-divider></el-divider>
				<br />

				<SenderDraws v-if="user._id" :senderId="user._id" :key="user._id" />

				<br />
				<el-divider></el-divider>
				<br />

				<div>Sa liste de souhaits & idées</div>
				<br />

				<WishesList v-if="user._id" :userId="user._id" />

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

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.user {
	border: 1px solid #ebebeb;
	border-radius: 4px;
	transition: 0.2s;
	padding: 20px;
}
</style>
