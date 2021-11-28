<template>
	<div class="container mb-4 mb-lg-5">
		<Overview :title="user.name" description="Ceci est une page profile d'utilisateur.">
			<template v-slot:avatar>
				<div class="col-12 col-lg-2">
					<Avatar class="profile-picture profile-picture--large profile-picture--centered" :username="user.name" :inline="true" :size="150" />
				</div>
			</template>
			<template v-slot:actionButtons>
				<div class="col-12 col-lg-3 mb-auto">
					<div class="list-actions">
						<a class="list-actions__primary-btn mt-2 mt-lg-0" href="#">Proposer une idée</a>
						<a class="list-actions__secondary-btn mb-0" href="#">Voir les évnènements</a>
					</div>
				</div>
			</template>
		</Overview>
		<!-- <WishesList :userId="user._id" /> -->
	</div>
</template>

<script>
import fetchApi from "@/services/http";

import Avatar from '@/components/Avatar.vue'
import Overview from '@/components/Overview.vue'
import WishesList from '@/components/WishesList.vue'

export default {
	name: 'User',
	components: {
		Avatar,
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
