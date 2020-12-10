<template>
	<div class="wishes-list">
		<el-row type="flex" justify="center" align="center">
			<el-col :span="12">
				<div v-for="(wish, index) in wishes" :key="wish._id">
					<el-row v-if="index !== wishEdit" type="flex" justify="center">
						<el-col class="wish-title" :span="10" type="flex" align="start">
							<div>{{ wish.title }} - {{ wish.price }}</div>
						</el-col>
						<el-col :span="1"><el-button type="primary" @click="editItem(index)" circle icon="el-icon-edit"></el-button></el-col>
						<el-col :span="1"><el-button type="danger" @click="deleteItem(index)" circle icon="el-icon-delete"></el-button></el-col>
					</el-row>

					<WishForm v-if="index === wishEdit" :userId="userId" :editWish="wish" @afterEdit="afterEdit" />
				</div>
				<WishForm :userId="userId" @afterEdit="afterEdit" />
			</el-col>
		</el-row>

		<br />
	</div>
</template>

<script>
import fetchApi from "@/services/http";
import WishForm from '@/components/WishForm.vue';

export default {
	name: 'WishesList',
	components: {
		WishForm
	},
	props: {
		userId: String
	},
	data() {
		return {
			wishes: [],
			edit: false,
			wishEdit: null
		}
	},
	methods: {
		editItem(index) {
			this.wishEdit = index;
		},
		async deleteWish(wishId) {
			await fetchApi().delete(`/wishes/${wishId}`);
			return true;
		},
		async getWishes(userId) {
			let { data: wishes = [] } = await fetchApi().get(`/users/${userId}/wishes`);
			return wishes;
		},
		async deleteItem(index) {
			await this.deleteWish(this.wishes[index]._id);
			this.wishes = await this.getWishes(this.userId);
		},
		async afterEdit() {
			this.wishEdit = null;
			this.wishes = await this.getWishes(this.userId);
		}
	},
	async mounted() {
		this.wishes = await this.getWishes(this.userId);
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
.wish-title {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
</style>
