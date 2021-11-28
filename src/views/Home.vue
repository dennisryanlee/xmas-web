<template>
	<div>
		<div class="container">
			<div class="row mt-lg-5">
				<div class="col-12">
					<div class="notifications-center">
						<div class="row align-items-center mb-lg-4">
							<div class="col-lg-9 d-none d-lg-block">
								<h1 class="notifications-center__title">Bienvenue {{ user.name }}</h1>
								<p class="notifications-center__subtitle mb-3">Voici un petit récapitulatif des évènements à venir.</p>
							</div>
							<div class="col-lg-3 d-none d-lg-block">
								<div class="list-actions"><a class="list-actions__primary-btn" href="#">Nouvelle idée</a><a class="list-actions__secondary-btn" href="#">Créer un évènement</a></div>
							</div>
						</div>
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
						<div class="product__spinner" style="display: none">
							<unicon class="svg-inline--fa more-actions__icon" viewBox="0 0 512 512" name="go-pulse" />
						</div>
						<div id="next-page" style="visibility: hidden"><span class="page next disabled">Voir plus</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
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

<style lang="scss" scoped>
// .home {
// 	transition: 0.2s;
// 	padding: 20px;
// }

// .home__ctas--mobile {
// 	@media only screen and (min-width: 600px) {
// 		display: none;
// 	}
// }

// .home__ctas--desktop {
// 	@media only screen and (max-width: 600px) {
// 		display: none;
// 	}
// }

// .home__links {
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;
// 	align-items: center;
// }
</style>
