<template>
	<Overview :title="`Bievenue ${user.name}`" description="Ceci est la home page, vous y retrouvez la liste des évènements à venir (noel, anniversaire etc..)">
		<template v-slot:actionButtons>
			<div class="col-12 col-lg-3 mb-auto">
				<div class="list-actions">
					<a class="list-actions__primary-btn mt-2 mt-lg-0" href="#">Créer une liste</a>
					<a class="list-actions__secondary-btn mb-0" href="#">Explorer les tendances</a>
				</div>
			</div>
		</template>
	</Overview>
	<!-- <HomeList /> -->
</template>

<script>
import fetchApi from "@/services/http";
import store from '@/store';

import Overview from '@/components/Overview.vue';
import HomeList from '@/components/HomeList.vue';

export default {
	name: 'Home',
	components: {
		Overview
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

