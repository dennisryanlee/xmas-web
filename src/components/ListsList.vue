<template>
	<div class="container mb-4 mb-lg-5">
		<div class="row mt-lg-5">
			<div class="col-12">
				<div class="thumb__title thumb__title--bigger">{{title}}</div>
				<b-list-group>
					<b-list-group-item class="d-flex justify-content-between align-items-center" v-for="(list, index)  in lists" :key="index">
						<div class="list-description__user user-card row no-gutters">
							<div class="col-auto d-flex">
								<Avatar class="profile-picture profile-picture--small" :username="list.name" :inline="true" :size="40" />
							</div>
							<div class="col-auto">
								<div class="user-card__infos">
									<router-link class="user-card__name" :to="`/lists/${list._id}`">{{list.name}}</router-link>
									<span class="user-card__info">{{Math.floor(Math.random() * 100)}} idées</span>
								</div>
							</div>
						</div>
						<Button @click="removeList(list._id)" icon="pi pi-times-circle" class="p-button-danger" label="Supprimer" />

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
import Button from 'primevue/button';
import { useConfirm } from "primevue/useconfirm";

export default {
	name: 'ListsList',
	components: {
		Avatar,
		ConfirmDialog,
		Button
	},
	props: {
		title: String,
		lists: Array,
	},
	setup() {
		const confirm = useConfirm();

		return { confirm }
	},
	emits: {
		onRemoveList: (listId) => {
			if (listId) {
				console.log('contract:', listId)
				return true
			} else {
				console.warn('Invalid submit event payload!')
				return false
			}
		}
	},
	methods: {
		removeList(listId) {
			this.confirm.require({
				message: 'Are you sure you want to proceed?',
				header: 'Confirmation',
				icon: 'pi pi-exclamation-triangle',
				accept: () => {
					console.log('accept', listId)

					this.$emit('onRemoveList', listId)
				},
				reject: () => { }
			});
		},
	},
}
</script>
