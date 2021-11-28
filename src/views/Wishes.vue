<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16" :xs="24">
			<div class="user">
				<section class="profile-card mt-4 mt-lg-0 profile-card--user">
					<div class="container">
						<div class="row align-items-lg-center justify-content-lg-start">
							<div class="col-12 col-lg-2">
								<Avatar class="profile-picture profile-picture--large profile-picture--centered" username="Gautier" :inline="true" :size="150" />
							</div>
							<div class="col-12 text-center text-lg-left col-lg-7">
								<h2 class="user__name">{{ user.name }}</h2>
								<p class="user__description">Description non renseignée</p>
								<div class="user-stats">
									<div class="user-stats__text"><span class="user-stats__count">0</span> liste publique</div>
									<div class="user-stats__text"><span class="user-stats__count">1</span> liste privée</div>
									<div class="user-stats__text"><span class="user-stats__count">2</span> envies</div>
								</div>
							</div>
							<div class="col-12 col-lg-3 mb-auto">
								<div class="list-actions"><a class="list-actions__primary-btn mt-2 mt-lg-0" href="#">Créer une liste</a><a class="list-actions__secondary-btn mb-0" href="#">Explorer les tendances</a></div>
							</div>
						</div>
					</div>
				</section>
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
import Avatar from '@/components/Avatar.vue'

export default {
	name: 'Wishes',
	components: {
		WishesList,
		Avatar
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
