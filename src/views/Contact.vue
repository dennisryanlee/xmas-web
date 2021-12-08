<template>
	<Overview :title="contact.name" description="Page de contact">
		<template v-slot:avatar>
			<div class="col-12 col-lg-2">
				<Avatar class="profile-picture profile-picture--large profile-picture--centered" :username="contact.name" :inline="true" :size="150" />
			</div>
		</template>
		<template v-slot:actionButtons>
			<div class="col-12 col-lg-3 mb-auto">
				<div class="list-actions">
					<a class="list-actions__primary-btn mt-2 mt-lg-0" href="#">Proposer une idée</a>
					<a class="list-actions__secondary-btn mb-0" href="#">Voir les évnènements</a>
				</div>
			</div>
		</template>
	</Overview>
	<WishesList :wishes="wishes" />
</template>

<script>
import fetchApi from "@/services/http";

import Avatar from '@/components/Avatar.vue'
import Overview from '@/components/Overview.vue'
import WishesList from '@/components/WishesList.vue'

export default {
	name: 'Contact',
	components: {
		Avatar,
		Overview,
		WishesList,
	},
	data() {
		return {
			contact: {},
      wishes: []
		}
	},
	methods: {
		async getContact(contactId) {
			let { data: contact = {} } = await fetchApi().get(`/contacts/${contactId}`)
			return contact;
		},

    async getContactWishes(contactId) {
			let { data: wishes = [] } = await fetchApi().get(`/contacts/${contactId}/wishes`);
			return wishes;
		},
	},
	async mounted() {
		let { contactId = null } = this.$route.params || {};
		this.contact = await this.getContact(contactId);
		this.wishes = await this.getContactWishes(this.contact._id);
	}
}
</script>
