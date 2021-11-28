<template>
	<div class="row mt-lg-5">
		<div class="col-12">
			<b-list-group>
				<b-list-group-item class="d-flex align-items-center" v-for="relation in relations" :key="relation._id">
					<div class="list-description__user user-card row no-gutters">
						<div class="col-auto d-flex">
							<Avatar class="profile-picture profile-picture--small" :username="relation.user?.name || relation.name" :inline="true" :size="40" />
						</div>
						<div class="col-auto">
							<div class="user-card__infos">
								<router-link class="user-card__name" :to="`/users/${relation.user?._id}`">{{ relation.user?.name || relation.name }}</router-link>
								<span class="user-card__info">2 envies - liste privée</span>
							</div>
						</div>
					</div>
				</b-list-group-item>
			</b-list-group>
		</div>
	</div>
</template>

<script>
import store from '@/store';
import router from '@/router';
import fetchApi from "@/services/http";

import Avatar from '@/components/Avatar.vue';

export default {
	name: 'RelationsList',
	components: {
		Avatar
	},
	data() {
		return {
			relations: []
		}
	},
	methods: {
		navigate(payload) {
			router.push(payload);
		},
		async getRelations(userId) {
			let { data: relations = [] } = await fetchApi().get(`/users/${userId}/relations`);

			relations.sort(function (a, b) {
				if (a.name < b.name) { return -1; }
				if (a.name > b.name) { return 1; }
				return 0;
			})

			relations.sort(function (a) {
				return a.user && a.user._id ? -1 : 1;
			})

			return relations;
		}
	},
	computed: {
		currentUser: () => store.getters.getUser
	},
	async mounted() {
		this.relations = await this.getRelations(this.currentUser._id);
	}
}
</script>

<style lang="scss" scoped>
.relations-list__account {
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff;
	color: #606266;
	text-align: center;
	box-sizing: border-box;
	outline: none;
	margin: 0;
	transition: 0.1s;
	font-weight: 500;
	padding: 5px 30px;
	width: 200px;

	.relations-list__inner-account {
		margin-top: 5px;
		margin-left: 10px;
		color: #606266;
	}
}
</style>