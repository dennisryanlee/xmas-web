<template>
	<form class="new_user" id="new_user" action="/account" accept-charset="UTF-8" :model="list" v-on:submit.prevent="onSubmit">
		<div class="form-row">
			<div class="col-md-12">
				<div class="form-group session__field">
					<b-form-input placeholder="Nom" autocomplete="last-name" class="form-control" required="required" v-model="list.name"></b-form-input>
					<div class="form__errors"></div>
				</div>
			</div>
		</div>
		<span class="session__tooltip" data-placement="top" data-title="Veuillez accepter les conditions générales d'utilisation et la politique de confidentialité" data-tooltip="tooltip" data-original-title="" title="">
			<input type="submit" name="commit" value="Ajouter" class="session__btn" id="session__submit" data-disable-with="Ajouter">
		</span>
	</form>
</template>

<script>
import fetchApi from "@/services/http";
import router from "@/router";
import store from '@/store';

export default {
	name: 'ListForm',
	data() {
		return {
			list: {}
		}
	},
  emits: ['onCreated'],
	methods: {
		async onSubmit() {
			await this.createEvent(this.list);
			this.$notify({ title: 'Succès', message: "Votre list vient d'etre créé", type: 'success' });
			router.push('/lists');
		},
		async createEvent(payload) {
			await fetchApi().post(`/users/${this.currentUser._id}/lists`, payload);

      this.$emit('onCreated')
			return true;
		},
	},
	computed: {
		currentUser: () => store.getters.getUser
	}
}
</script>
