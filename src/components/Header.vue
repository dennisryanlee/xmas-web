<template>
	<div class="container">
		<div class="row align-items-lg-center justify-content-lg-start">
			<div class="col-12 col-lg-2">
				<Avatar class="profile-picture profile-picture--large profile-picture--centered" username="G" :inline="true" :size="150" />
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
</template>

<script>
import Avatar from '@/components/Avatar.vue';

export default {
	name: 'Header',
	components: {
		Avatar
	},
	props: {
		user: {
			type: Object,
		}
	}
}
</script>
