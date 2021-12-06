<template>
	<Overview title="Carnet" description="Voici la liste de vos amis & famille & collègues" :avatar="false">
		<template v-slot:actionButtons>
			<div class="col-12 col-lg-3 mb-auto">
				<div class="list-actions">
					<a class="list-actions__primary-btn mt-2 mt-lg-0" href="#" @click="display = true">Créer un contact</a>
				</div>
			</div>
		</template>
	</Overview>
	<ContactsList v-for="section in sections" :key="section.name" :title="section.title" :contacts="section.contacts" @onRemoveContact="removeContact($event)" />

	<Dialog v-model:visible="display" :dismissableMask="true" :modal="true">
		<template #header>
			Ajouter un nouveau contact
		</template>
		<ContactForm @onCreated="contactCreated" />
	</Dialog>

</template>

<script>
import fetchApi from "@/services/http";
import store from '@/store';

import Overview from '@/components/Overview.vue'
import ContactsList from '@/components/ContactsList.vue'
import Dialog from 'primevue/dialog';
import ContactForm from '@/components/ContactForm.vue'

export default {
	name: 'Contacts',
	components: {
		Overview,
		ContactsList,
		Dialog,
		ContactForm
	},
	data() {
		return {
			display: false,
			sections: []
		}
	},
	methods: {
		async contactCreated() {
      this.display = false
      let { _id: userId = null } = this.currentUser || {};
			this.sections = await this.getUserContactsSections(userId);
		},

		async getUserContactsSections(userId) {
			let { data: contacts = [] } = await fetchApi().get(`/users/${userId}/contacts`);

			return [{ title: 'Autres', contacts }];
		},
		async removeContact(contactId) {
			let { _id: userId = null } = this.currentUser || {};
			await fetchApi().delete(`/users/${userId}/contacts`, { data: { contactId } });

			this.sections = await this.getUserContactsSections(userId);
			return true;
		},
	},
	computed: {
		currentUser: () => store.getters.getUser
	},
	async mounted() {
		let { _id: userId = null } = this.currentUser || {};
		this.sections = await this.getUserContactsSections(userId);
	},
}
</script>
