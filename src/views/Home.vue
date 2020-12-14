<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16" :xs="24">
			<div class="home">
				<h3>Bonjour {{ user.name }} !</h3>

				<br />
				<el-divider></el-divider>
				<div>Petits rappels:</div>
				<br />

				<SenderDraws v-if="user._id" :senderId="user._id" />

				<br />
				<el-divider></el-divider>
				<br />

				<div>Découvre vite le résultat des tirages</div>

				<el-button type="primary">Résultats des tirages</el-button>

				<br />
				<br />
				<br />

				<div>Aide des cousins à choisir ton cadeau</div>

				<el-button type="primary">Ma wishlist</el-button>

				<br />
				<br />
				<br />

				<div>Propose des idées à tes cousins</div>

				<el-button type="primary">Ma wishlist</el-button>

				<br />
				<br />
				<br />
			</div>
		</el-col>
	</el-row>
</template>

<script>
import fetchApi from "@/services/http";
import SenderDraws from '@/components/SenderDraws.vue';

import store from '@/store';

export default {
	name: 'Home',
	components: {
		SenderDraws
	},
	data() {
		return {
			user: {}
		}
	},
	methods: {
		async getUser(userId) {
			let { data: user = null } = await fetchApi().get(`/users/${userId}`);
			return user;
		}
	},
	computed: {
		currentUser: () => store.getters.getUser
	},
	async mounted() {
		let { _id: userId = null } = this.currentUser || {};
		this.user = await this.getUser(userId);
	},
}
</script>

<style lang="scss" scoped>
.home {
	transition: 0.2s;
	padding: 20px;
}
</style>
