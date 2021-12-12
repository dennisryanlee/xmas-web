<template>
	<Overview :title="list.name" description="Liste d'idées">
		<template v-slot:avatar>
			<div class="col-12 col-lg-2">
				<Avatar class="profile-picture profile-picture--large profile-picture--centered" :username="list.name" :inline="true" :size="150" />
			</div>
		</template>
		<template v-slot:actionButtons>
			<div class="col-12 col-lg-3 mb-auto">
				<div class="list-actions">
					<a class="list-actions__primary-btn mt-2 mt-lg-0" href="#">Proposer une idée</a>
					<a class="list-actions__secondary-btn mb-0" href="#">Ajouter une nouvelle section</a>
				</div>
			</div>
		</template>
	</Overview>

	<WishesList v-for="section in sections" :key="section.name" :title="section.title" :wishes="section.wishes" />

</template>

<script>
import fetchApi from "@/services/http";

import Avatar from '@/components/Avatar.vue'
import Overview from '@/components/Overview.vue'
import WishesList from '@/components/WishesList.vue'

export default {
	name: 'List',
	components: {
		Avatar,
		Overview,
		WishesList,
	},
	data() {
		return {
			list: {},
			sections: [{
				title: 'Vêtements/ Accessoires / Sacs à main',
				wishes: [{
					_id: 11,
					title: 'Porte passeport',
					description: 'En cuir: seconde main OK'
				}, {
					_id: 12,
					title: 'Mocassins noirs boucle dorée',
					description: 'Comme Gucci - taille 37'
				}]
			}, {
				title: 'Maquillage/ Parfumerie',
				wishes: [{
					_id: 21,
					title: 'Wish #21',
					description: 'Description wish #21'
				}, {
					_id: 22,
					title: 'Wish #22',
					description: 'Description wish #21'
				}]
			}, {
				title: 'Livres',
				wishes: [{
					_id: 21,
					title: 'Wish #21',
					description: 'Description wish #21'
				}, {
					_id: 22,
					title: 'Wish #22',
					description: 'Description wish #21'
				}]
			}, {
				title: 'Maquillage/ Parfumerie',
				wishes: [{
					_id: 21,
					title: 'Wish #21',
					description: 'Description wish #21'
				}, {
					_id: 22,
					title: 'Wish #22',
					description: 'Description wish #21'
				}]
			}, {
				title: 'Plantes',
				wishes: [{
					_id: 21,
					title: 'Wish #21',
					description: 'Description wish #21'
				}, {
					_id: 22,
					title: 'Wish #22',
					description: 'Description wish #21'
				}]
			}, {
				title: 'Bougies Parfumées',
				wishes: [{
					_id: 21,
					title: 'Wish #21',
					description: 'Description wish #21'
				}, {
					_id: 22,
					title: 'Wish #22',
					description: 'Description wish #21'
				}]
			}]
		}
	},
	methods: {
		async getList(listId) {
			let { data: list = {} } = await fetchApi().get(`/lists/${listId}`)
			return list;
		},

		async getListWishes(listId) {
			let { data: wishes = [] } = await fetchApi().get(`/lists/${listId}/wishes`);
			return wishes;
		},
	},
	async mounted() {
		let { listId = null } = this.$route.params || {};
		this.list = await this.getList(listId);
		// this.wishes = await this.getListWishes(this.list._id);
	}
}
</script>

<style scoped>
.grid-container {
	display: grid; /* 1 */
	grid-auto-rows: 50%; /* 2 */
	grid-gap: 50%; /* 3 */
	grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); /* 4 */
}
</style>
