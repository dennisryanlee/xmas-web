<template>
	<Overview :title="`Bienvenue ${currentUser.firstName}`" description="Retrouvez ici toutes vos listes." :avatar="false">
		<template v-slot:actionButtons>
			<div class="col-12 col-lg-3 mb-auto">
				<div class="list-actions">
					<a class="list-actions__primary-btn mt-2 mt-lg-0" href="#" @click="display = true">Voir votre liste</a>
          <a class="list-actions__secondary-btn mt-2 mt-lg-0" href="#" @click="display = true">Ajouter une liste</a>
				</div>
			</div>
		</template>
	</Overview>

	<ListsList v-for="section in sections" :key="section.name" :title="section.title" :lists="section.lists" @onRemoveList="removeList($event)" />

	<Dialog v-model:visible="display" :dismissableMask="true" :modal="true">
		<template #header>
			Ajouter une liste
		</template>
		<ListForm @onCreated="listCreated" />
	</Dialog>

</template>

<script>
import fetchApi from "@/services/http";
import store from '@/store';

import Overview from '@/components/Overview.vue'
import ListsList from '@/components/ListsList.vue'
import Dialog from 'primevue/dialog';
import ListForm from '@/components/ListForm.vue'

export default {
	name: 'Lists',
	components: {
		Overview,
		ListsList,
		Dialog,
		ListForm
	},
	data() {
		return {
			display: false,
			sections: []
		}
	},
	methods: {
		async listCreated() {
			this.display = false
			let { _id: userId = null } = this.currentUser || {};
			this.sections = await this.getUserListsSections(userId);
		},

		async getUserListsSections(userId) {
			let { data: lists = [] } = await fetchApi().get(`/users/${userId}/lists`);

			return [
          { title: 'Famille', lists },
          { title: 'Amis', lists },
          { title: 'Travail', lists }
        ];
		},
		async removeList(listId) {
			let { _id: userId = null } = this.currentUser || {};
			await fetchApi().delete(`/users/${userId}/lists`, { data: { listId } });

			this.sections = await this.getUserListsSections(userId);
			return true;
		},
	},
	computed: {
		currentUser: () => store.getters.getUser
	},
	async mounted() {
		let { _id: userId = null } = this.currentUser || {};
		this.sections = await this.getUserListsSections(userId);
	},
}
</script>
