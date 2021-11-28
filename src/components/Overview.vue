<template>
	<section class="profile-card mt-4 mt-lg-0 profile-card--user">
		<div class="row align-items-lg-center justify-content-lg-start">
			<div class="col-12 col-lg-2">
				<Avatar class="profile-picture profile-picture--large profile-picture--centered" :username="user.name" :inline="true" :size="150" />
			</div>
			<div class="col-12 text-center text-lg-left col-lg-7">
				<h2 class="user__name">{{ user.name }}</h2>
				<p class="user__description">{{ user.description || "Description non renseignée" }}</p>
				<Stats :userId="user._id" />
			</div>
			<div class="col-12 col-lg-3 mb-auto">
				<div class="list-actions">
					<a class="list-actions__primary-btn mt-2 mt-lg-0" href="#">Créer une liste</a>
					<a class="list-actions__secondary-btn mb-0" href="#">Explorer les tendances</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import fetchApi from "@/services/http";

import Avatar from '@/components/Avatar.vue'
import Stats from '@/components/Stats.vue'

export default {
	name: 'Overview',
	components: {
		Avatar,
		Stats,
	},
	props: {
		userId: {
			type: String,
		}
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
