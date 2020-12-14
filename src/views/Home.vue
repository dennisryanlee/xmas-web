<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16" :xs="24">
			<div class="home">
				<h3>Bonjour {{ user.name }} !</h3>

				<el-divider></el-divider>
				<div>Cette année:</div>
				<br />

				<SenderDraws v-if="user._id" :senderId="user._id" />

				<el-divider></el-divider>

				<el-row type="flex" justify="space-between" align="center">
					<el-col>
						<h3>Découvre vite le résultat des tirages</h3>
						<el-button class="home__button" type="primary" @click="navigate({ name: 'Events' })">
							<strong>EVENEMENTS</strong>
						</el-button>
					</el-col>
					<el-col>
						<h3>Aide des cousins à choisir ton cadeau</h3>
						<el-button class="home__button" type="primary" @click="navigate({ name: 'Wishes', params: { userId: currentUser._id } })">
							<strong>MES SOUHAITS</strong>
						</el-button>
					</el-col>
					<el-col>
						<h3>Propose des idées à tes cousins</h3>
						<el-button class="home__button" type="primary" @click="navigate({ name: 'Users' })">
							<strong>FAMILLE</strong>
						</el-button>
					</el-col>
				</el-row>
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
		},
		navigate(payload) {
			this.$router.push(payload);
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
.home__button {
	min-width: 250px;
}
</style>
