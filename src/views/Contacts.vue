<template>
	<Overview title="Carnet" description="Voici la liste de vos amis & famille & collègues" :avatar="false" />
	<ContactsList />
</template>

<script>
import Overview from '@/components/Overview.vue'
import ContactsList from '@/components/ContactsList.vue'

export default {
	name: 'Contacts',
	components: {
		Overview,
		ContactsList
	}
}
</script>

<style lang="scss" scoped>
.user {
	transition: 0.2s;
	padding: 20px;
}
</style>
