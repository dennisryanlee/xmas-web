<template>
	<section class="profile-card mt-4 mt-lg-0 profile-card--user">
		<div class="container">
			<div class="row align-items-center mb-lg-4">
				<div class="col-lg-9 d-none d-lg-block">
					<h1 class="notifications-center__title">Carnet</h1>
					<p class="notifications-center__subtitle mb-3">Voici la liste de vos amis & famille & collègues</p>
				</div>
				<div class="col-lg-3 d-none d-lg-block">
					<div class="list-actions"><a class="list-actions__primary-btn" href="#">Nouvelle idée</a><a class="list-actions__secondary-btn" href="#">Créer un évènement</a></div>
				</div>
			</div>
			<Overview title="Carnet" description="Voici la liste de vos amis & famille & collègues" :avatar="false" />
			<RelationsList />
		</div>
	</section>
</template>

<script>
import Overview from '@/components/Overview.vue'
import RelationsList from '@/components/RelationsList.vue'

export default {
	name: 'Relations',
	components: {
		Overview,
		RelationsList
	}
}
</script>

<style lang="scss" scoped>
.user {
	transition: 0.2s;
	padding: 20px;
}
</style>
