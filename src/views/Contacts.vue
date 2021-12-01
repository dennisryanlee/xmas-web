<template>
	<Overview title="Carnet" description="Voici la liste de vos amis & famille & collègues" :avatar="false" />
	<ContactsList v-for="section in sections" :key="section.name" :title="section.title" :contacts="section.contacts" />
</template>

<script>
import Overview from '@/components/Overview.vue'
import ContactsList from '@/components/ContactsList.vue'

export default {
	name: 'Contacts',
	components: {
		Overview,
		ContactsList
	},
	data() {
		return {
			sections: [{
				title: 'Amis',
				contacts: [{ id: 1, name: 'Ann-Sophie' }, { id: 2, name: 'Bertrand' }, { id: 3, name: 'Charles' }, { id: 4, name: 'Doris' }]
			}, {
				title: 'Famille',
				contacts: [{ id: 5, name: 'Etienne' }, { id: 6, name: 'Frédérique' }, { id: 7, name: 'Gautier' }, { id: 8, name: 'Hector' }]
			}, {
				title: 'Autres',
				contacts: [{ id: 9, name: 'Isabelle' }, { id: 10, name: 'Juliette' }, { id: 11, name: 'Kevin' }, { id: 12, name: 'Loris' }]
			}]
		}
	}
}
</script>
