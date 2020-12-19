<template>
	<div class="wishes-list">
		<el-row type="flex" justify="center" align="center">
			<el-col justify="center" align="center">
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
								<el-tag v-if="wish.hidden && currentUser._id !== userId" type="danger">{{ username }} ne peut pas le voir</el-tag>
							</el-col>

							<el-col align="end">
								<Avatar :userId="wish.emitter._id" :username="wish.emitter.name" :backgroundColor="(wish.emitter && wish.emitter.avatar && wish.emitter.avatar.backgroundColor) || 'black'" :color="(wish.emitter && wish.emitter.avatar && wish.emitter.avatar.color) || 'white'" :inline="true" :size="40" />
							</el-col>
						</el-row>
					</el-card>
					<div v-if="index === wishEdit">
						<WishForm :userId="userId" :memberId="memberId" :username="username" :editWish="wish" @afterEdit="afterEdit" />
					</div>
				</div>

				<el-button v-if="!addNewWish" type="primary" @click="addItem()" icon="el-icon-circle-plus-outline">Ajouter</el-button>
				<div v-if="addNewWish">
					<WishForm :userId="userId" :memberId="memberId" :username="username" @afterEdit="afterEdit" />
				</div>
			</el-col>
		</el-row>

		<br />
	</div>
</template>

<script>
import fetchApi from "@/services/http";
import WishForm from '@/components/WishForm.vue';
import Avatar from '@/components/Avatar.vue';

import store from '@/store';

export default {
	name: 'WishesList',
	components: {
		WishForm,
		Avatar
	},
	props: {
		userId: String,
		memberId: String,
		username: String
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
		async getUserWishes(userId) {
			let { data: wishes = [] } = await fetchApi().get(`/users/${userId}/wishes`);
			return wishes;
		},
		async getMemberWishes(memberId) {
			let { data: wishes = [] } = await fetchApi().get(`/members/${memberId}/wishes`);
			return wishes;
		},
		async deleteItem(index) {
			await this.deleteWish(this.wishes[index]._id);
			this.wishes = this.userId ? await this.getUserWishes(this.userId) : await this.getMemberWishes(this.memberId);
		},
		async afterEdit() {
			this.wishEdit = null;
			this.addNewWish = false;
			this.wishes = this.userId ? await this.getUserWishes(this.userId) : await this.getMemberWishes(this.memberId);
		}
	},
	async mounted() {
		this.wishes = this.userId ? await this.getUserWishes(this.userId) : await this.getMemberWishes(this.memberId);
	},
	computed: {
		currentUser: () => store.getters.getUser
	}
}
</script>

<style lang="scss" scoped>
.wishes-list__card-content {
	padding-bottom: 20px;
}

.wishes-list__card-button--delete {
	color: #f56c6c;
}
</style>
