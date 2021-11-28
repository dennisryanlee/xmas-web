<template>
	<div class="container">
		<div class="row mt-lg-5">
			<div class="col-12">
				<b-list-group>
					<b-list-group-item v-for="wish in wishes" :key="wish._id" href="#" v-b-toggle="`collapse-${wish._id}`" class="flex-column align-items-start">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">{{ wish.title }}</h5>
							<small>3 days ago</small>
						</div>
						<p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
						<small>Donec id elit non mi porta.</small>
						<div>
							<a v-b-toggle="`collapse-${wish._id}`" variant="primary">Voir les commentaires</a>
							<b-collapse :id="`collapse-${wish._id}`" class="mt-2">
								<div class="container mt-5">
									<div class="row d-flex justify-content-center">
										<div class="col-md-8">
											<div class="headings d-flex justify-content-between align-items-center mb-3">
												<h5>Unread comments(6)</h5>
												<div class="buttons">
													<span class="badge bg-white d-flex flex-row align-items-center">
														<span class="text-primary">Comments "ON"</span>
														<div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked /></div>
													</span>
												</div>
											</div>
											<div class="card p-3">
												<div class="d-flex justify-content-between align-items-center">
													<div class="user d-flex flex-row align-items-center">
														<img src="https://i.imgur.com/hczKIze.jpg" width="30" class="user-img rounded-circle mr-2" /> <span><small class="font-weight-bold text-primary">james_olesenn</small> <small class="font-weight-bold">Hmm, This poster looks cool</small></span>
													</div>
													<small>2 days ago</small>
												</div>
												<div class="action d-flex justify-content-between mt-2 align-items-center">
													<div class="reply px-4"><small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small></div>
													<div class="icons align-items-center"><i class="fa fa-star text-warning"></i> <i class="fa fa-check-circle-o check-icon"></i></div>
												</div>
											</div>
											<div class="card p-3 mt-2">
												<div class="d-flex justify-content-between align-items-center">
													<div class="user d-flex flex-row align-items-center">
														<img src="https://i.imgur.com/C4egmYM.jpg" width="30" class="user-img rounded-circle mr-2" /> <span><small class="font-weight-bold text-primary">olan_sams</small> <small class="font-weight-bold">Loving your work and profile! </small></span>
													</div>
													<small>3 days ago</small>
												</div>
												<div class="action d-flex justify-content-between mt-2 align-items-center">
													<div class="reply px-4"><small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small></div>
													<div class="icons align-items-center"><i class="fa fa-check-circle-o check-icon text-primary"></i></div>
												</div>
											</div>
											<div class="card p-3 mt-2">
												<div class="d-flex justify-content-between align-items-center">
													<div class="user d-flex flex-row align-items-center">
														<img src="https://i.imgur.com/0LKZQYM.jpg" width="30" class="user-img rounded-circle mr-2" /> <span><small class="font-weight-bold text-primary">rashida_jones</small> <small class="font-weight-bold">Really cool Which filter are you using? </small></span>
													</div>
													<small>3 days ago</small>
												</div>
												<div class="action d-flex justify-content-between mt-2 align-items-center">
													<div class="reply px-4"><small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small></div>
													<div class="icons align-items-center"><i class="fa fa-user-plus text-muted"></i> <i class="fa fa-star-o text-muted"></i> <i class="fa fa-check-circle-o check-icon text-primary"></i></div>
												</div>
											</div>
											<div class="card p-3 mt-2">
												<div class="d-flex justify-content-between align-items-center">
													<div class="user d-flex flex-row align-items-center">
														<img src="https://i.imgur.com/ZSkeqnd.jpg" width="30" class="user-img rounded-circle mr-2" /> <span><small class="font-weight-bold text-primary">simona_rnasi</small> <small class="font-weight-bold text-primary">@macky_lones</small> <small class="font-weight-bold text-primary">@rashida_jones</small> <small class="font-weight-bold">Thanks </small></span>
													</div>
													<small>3 days ago</small>
												</div>
												<div class="action d-flex justify-content-between mt-2 align-items-center">
													<div class="reply px-4"><small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small></div>
													<div class="icons align-items-center"><i class="fa fa-check-circle-o check-icon text-primary"></i></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="bg-white">
									<div class="d-flex flex-row fs-12">
										<div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
										<div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
										<div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
									</div>
								</div>
								<div class="bg-light p-2">
									<div class="d-flex flex-row align-items-start"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /><textarea class="form-control ml-1 shadow-none textarea"></textarea></div>
									<div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
								</div>
							</b-collapse>
						</div>
					</b-list-group-item>
				</b-list-group>
			</div>
		</div>
	</div>
	<!-- <div class="wishes-list">
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
	</div> -->
</template>

<script>
import fetchApi from "@/services/http";
// import WishForm from '@/components/WishForm.vue';
// import Avatar from '@/components/Avatar.vue';

import store from '@/store';

export default {
	name: 'WishesList',
	components: {
		// WishForm,
		// Avatar
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
