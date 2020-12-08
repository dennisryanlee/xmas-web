<template>
	<div class="wishes-form">
		<el-form ref="form" :inline="true" :model="wish">
			<el-form-item>
				<el-input :disabled="formDisabled" v-model="wish.title" placeholder="Votre souhait"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input :disabled="formDisabled" v-model="wish.price" placeholder="Prix"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button :disabled="formDisabled" type="primary" icon="el-icon-edit" @click="onSubmit">{{ buttonLabel }}</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import createHttp from "@/services/http";

export default {
	name: 'WishForm',
	props: {
		wishId: String,
		editWish: Object
	},
	data() {
		return {
			wish: this.editWish || {},
			formDisabled: false,
			buttonLabel: this.editWish ? 'Modifier' : 'Ajouter'
		}
	},
	methods: {
		updateWish() {
			console.log('update', this.wish._id);
			let http = createHttp(true);
			http.put(`/wishes/${this.wish._id}`, this.wish)
				.then(() => {
					console.log('INFO: WishesForm.vue#updateWish - OK');
				})
				.catch(err => {
					console.log('ERROR: WishesList.vue#updateWish - Error while getting wishes:', err);
				})
		},
		createWish() {
			let http = createHttp(true);
			http.post('/wishes', this.wish, { params: { userId: '5fc7ab9f4da3f231abe02786' } })
				.then(() => {
					console.log('INFO: WishesForm.vue#createWish - OK');
				})
				.catch(err => {
					console.log('ERROR: WishesList.vue#createWish - Error while getting wishes:', err);
				})
		},
		onSubmit() {
			if (this.wish && this.wish._id) this.updateWish()
			else this.createWish()
		}
	},
	mounted() {

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
</style>
