<template>
	<ul class="notifications-center__list" id="items-load">
		<li class="notification">
			<a class="notification__link" href="#">
				<div class="row">
					<div class="col-auto pr-0">
						<div class="notification__picture profile-picture profile-picture--small">
							<Avatar v-if="user && user.name" class="profile-picture profile-picture--large profile-picture--centered" :userId="user._id" username="Ann-Sophie" backgroundColor="pink" :color="(user && user.avatar && user.avatar.color) || 'white'" :inline="true" :size="40" />
						</div>
					</div>
					<div class="col pl-0">
						<div class="notification__content">
							Vous avez été tiré au sort pour choisir un cadeau à Ann-Sophie. 🖤
							<div class="notification__time">Il vous reste 23 jours</div>
						</div>
					</div>
				</div>
			</a>
		</li>
		<li class="notification">
			<a class="notification__link" href="#">
				<div class="row">
					<div class="col-auto pr-0">
						<div class="notification__picture profile-picture profile-picture--small">
							<Avatar class="profile-picture profile-picture--large profile-picture--centered" username="Valentine" :inline="true" :size="40" />
						</div>
					</div>
					<div class="col pl-0">
						<div class="notification__content">
							L'anniversaire de Valentine approche à grand pas !
							<div class="notification__time">Il vous reste 18 jours</div>
						</div>
					</div>
				</div>
			</a>
		</li>
	</ul>
</template>

<script>
import fetchApi from "@/services/http";
import store from '@/store';

// import DrawsList from '@/components/DrawsList.vue';
import Avatar from '@/components/Avatar.vue';

export default {
	name: 'Home',
	components: {
		Avatar
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

