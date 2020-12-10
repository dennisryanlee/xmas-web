<template>
	<div class="wishes-form">
		<el-form ref="form" :inline="true" :model="wish">
			<el-card class="box-card" shadow="never">
				<template #header>
					<el-row type="flex" align="space-between" justify="space-between" class="clearfix">
						<el-col type="flex" align="start">
							<el-form-item>
								<el-input :disabled="formDisabled" v-model="wish.title" placeholder="Votre souhait"></el-input>
							</el-form-item>
						</el-col>
						<el-col type="flex" align="end">
							<el-row type="flex" align="end">
								<el-col>
									<el-button type="text" icon="el-icon-refresh-left" @click="onCancel">Annuler</el-button>
									<el-button type="text" icon="el-icon-finished" @click="onSubmit" class="wish-form__card-button--save">Sauver</el-button>
								</el-col>
							</el-row>
						</el-col>
					</el-row>
				</template>
				<el-row class="wishes-list__card-content">
					<el-col type="flex">
						<el-row type="flex" v-for="(link, index) in wish.links" :key="index" style="text-align: start; word-break: break-word">
							<el-form-item>
								<el-input :disabled="formDisabled" v-model="link.title" placeholder="Titre" prefix-icon="el-icon-office-building"></el-input>
							</el-form-item>
							<el-form-item>
								<el-input :disabled="formDisabled" v-model="link.url" placeholder="Lien" suffix-icon="el-icon-mouse"></el-input>
							</el-form-item>
						</el-row>
						<el-button type="text" icon="el-icon-paperclip" @click="addLink">Ajouter un lien</el-button>
					</el-col>
				</el-row>
				<el-row type="flex" justify="space-between" align="end">
					<el-col align="start">
						<el-form-item>
							<el-input type="number" :disabled="formDisabled" v-model="wish.price" placeholder="Prix" suffix-icon="el-icon-money"></el-input>
						</el-form-item>
					</el-col>

					<el-col align="end">
						<el-form-item>
							<el-checkbox v-model="wish.visible">Lui cacher</el-checkbox>
						</el-form-item>
					</el-col>
				</el-row>
			</el-card>
		</el-form>
	</div>
</template>

<script>
import fetchApi from "@/services/http";

import store from '@/store';

export default {
	name: 'WishForm',
	props: {
		wishId: String,
		editWish: Object,
		afterEdit: Function,
		userId: String
	},
	data() {
		return {
			wish: this.editWish || {},
			formDisabled: false,
			buttonLabel: this.editWish ? 'Modifier' : 'Ajouter'
		}
	},
	computed: {
		currentUser: () => store.getters.getUser
	},
	methods: {
		onCancel() {
			this.$emit('after-edit');
		},
		addLink() {
			if (!this.wish.links) this.wish.links = [];
			this.wish.links.push({ url: null, title: null })

		},
		async updateWish(wishId, payload) {
			await fetchApi().put(`/wishes/${wishId}`, payload)
			this.$emit('after-edit');
		},
		async createWish(userId, payload) {
			await fetchApi().post(`/users/${userId}/wishes`, payload)
			this.$emit('after-edit');
		},
		async onSubmit() {
			if (this.wish && this.wish._id) await this.updateWish(this.wish._id, this.wish)
			else {
				await this.createWish(this.userId, this.wish)
				this.wish = {};
			}
		}
	}
}
</script>

<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
.box-card {
	margin-bottom: 20px;
}
.wishes-list__card-content {
	padding-bottom: 20px;
}

.wish-form__card-button--save {
	color: #67c23a;
}
</style>
