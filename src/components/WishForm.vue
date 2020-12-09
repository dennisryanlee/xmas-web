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
import fetchApi from "@/services/http";

export default {
	name: 'WishForm',
	props: {
		wishId: String,
		editWish: Object,
		afterEdit: Function
	},
	data() {
		return {
			wish: this.editWish || {},
			formDisabled: false,
			buttonLabel: this.editWish ? 'Modifier' : 'Ajouter'
		}
	},
	methods: {
		async updateWish(wishId, payload) {
			await fetchApi().put(`/wishes/${wishId}`, payload)
			this.$emit('after-edit');
		},
		async createWish(userId, payload) {
			await fetchApi().post('/wishes', payload, { params: { userId: userId } })
			this.$emit('after-edit');
		},
		async onSubmit() {
			if (this.wish && this.wish._id) await this.updateWish(this.wish._id, this.wish)
			else {
				await this.createWish('5fc7ab9f4da3f231abe02786', this.wish)
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
</style>
