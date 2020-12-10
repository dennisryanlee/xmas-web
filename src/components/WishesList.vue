<template>
	<div class="wishes-list">
		<el-row type="flex" justify="center" align="center">
			<el-col>
				<div v-for="(wish, index) in wishes" :key="wish._id">
					<el-card v-if="index !== wishEdit" class="box-card" shadow="never">
						<template #header>
							<el-row type="flex" align="space-between" justify="space-between" class="clearfix">
								<el-col type="flex" align="start">
									<span>{{ wish.title }}</span>
								</el-col>
								<el-col type="flex" align="end">
									<el-row type="flex" align="end">
										<el-col>
											<el-button type="text" v-if="wish.emitter._id === currentUser._id" @click="editItem(index)" icon="el-icon-edit">Modifier</el-button>
											<el-button type="text" v-if="wish.emitter._id === currentUser._id" @click="deleteItem(index)" icon="el-icon-delete" class="wishes-list__card-button--delete"></el-button>
										</el-col>
									</el-row>
								</el-col>
							</el-row>
						</template>
						<el-row class="wishes-list__card-content">
							<el-col type="flex">
								<el-row type="flex" v-for="(link, index) in wish.links" :key="index" style="text-align: start; word-break: break-word">
									<el-link type="primary" :href="link.url" target="_blank">{{ link.title }}</el-link>
								</el-row>
							</el-col>
						</el-row>
						<el-row type="flex" justify="space-between" align="end">
							<el-col align="start">
								<el-tag type="info">Prix: {{ wish.price }}€</el-tag>
							</el-col>

							<el-col align="end">
								<el-tag>{{ currentUser._id === wish.emitter._id ? "Ton idée" : `L'idée de ${wish.emitter.name}` }}</el-tag>
							</el-col>
						</el-row>
					</el-card>
					<div v-if="index === wishEdit">
						<WishForm :userId="userId" :editWish="wish" @afterEdit="afterEdit" />
					</div>
				</div>

				<el-button v-if="!addNewWish" type="text" @click="addItem()" icon="el-icon-edit">Ajouter</el-button>
				<div v-if="addNewWish">
					<WishForm :userId="userId" @afterEdit="afterEdit" />
				</div>
			</el-col>
		</el-row>

		<br />
	</div>
</template>

<script>
import fetchApi from "@/services/http";
import WishForm from '@/components/WishForm.vue';

import store from '@/store';

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
			wishEdit: null,
			addNewWish: false
		}
	},
	methods: {
		editItem(index) {
			this.wishEdit = index;
		},
		addItem() {
			this.addNewWish = !this.addNewWish;
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
			this.addNewWish = false;
			this.wishes = await this.getWishes(this.userId);
		}
	},
	computed: {
		currentUser: () => store.getters.getUser
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
.box-card {
	margin-bottom: 20px;
}
.wishes-list__card-content {
	padding-bottom: 20px;
}

.wishes-list__card-button--delete {
	color: #f56c6c;
}
</style>
