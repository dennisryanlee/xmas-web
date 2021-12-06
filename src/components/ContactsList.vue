<template>
	<div class="container mb-4 mb-lg-5">
		<div class="row mt-lg-5">
			<div class="col-12">
				<div class="thumb__title thumb__title--bigger">{{title}}</div>
				<b-list-group>
					<b-list-group-item class="d-flex justify-content-between align-items-center" v-for="(contact, index)  in contacts" :key="index">
						<div class="list-description__user user-card row no-gutters">
							<div class="col-auto d-flex">
								<Avatar class="profile-picture profile-picture--small" :username="contact.name" :inline="true" :size="40" />
							</div>
							<div class="col-auto">
								<div class="user-card__infos">
									<router-link class="user-card__name" :to="`/users/${contact.user?._id}`">{{ contact.user?.name || contact.name }}</router-link>
									<span class="user-card__info">2 envies - liste privée</span>
								</div>
							</div>
						</div>
						<b-button @click="removeContact(contact._id)" icon="pi pi-check" label="Confirm">delete</b-button>

					</b-list-group-item>
				</b-list-group>
			</div>
		</div>
	</div>

	<ConfirmDialog></ConfirmDialog>
</template>

<script>
import Avatar from '@/components/Avatar.vue';
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";

export default {
	name: 'ContactsList',
	components: {
		Avatar,
		ConfirmDialog
	},
	props: {
		title: String,
		contacts: Array,
	},
	setup() {
		const confirm = useConfirm();

		return { confirm }
	},
	emits: {
		onRemoveContact: (contactId) => {
			if (contactId) {
				console.log('contract:', contactId)
				return true
			} else {
				console.warn('Invalid submit event payload!')
				return false
			}
		}
	},
	methods: {
		removeContact(contactId) {
			this.confirm.require({
				message: 'Are you sure you want to proceed?',
				header: 'Confirmation',
				icon: 'pi pi-exclamation-triangle',
				accept: () => {
					console.log('accept', contactId)

					this.$emit('onRemoveContact', contactId)
				},
				reject: () => { }
			});
		},
	},
}
</script>
