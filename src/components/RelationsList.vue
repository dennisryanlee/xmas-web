<template>
	<div class="relations-list">
		<div v-for="relation in relations" :key="relation._id">
			<el-row v-if="relation.user && relation.user._id" type="flex" align="center" justify="center" @click="navigate({ name: 'User', params: { userId: relation.user._id } })">
				<div class="relations-list__account">
					<el-row type="flex" align="center" justify="start">
						<Avatar :userId="relation.user._id" :username="relation.user.name" :backgroundColor="(relation.user && relation.user.avatar && relation.user.avatar.backgroundColor) || 'black'" :color="(relation.user && relation.user.avatar && relation.user.avatar.color) || 'white'" :inline="true" :size="30" />
						<router-link class="relations-list__inner-account" :to="{ name: 'User', params: { userId: relation.user._id } }">{{ relation.user.name }}</router-link>
					</el-row>
				</div>
			</el-row>

			<router-link v-else :to="{ name: 'Member', params: { memberId: relation._id } }">{{ relation.name }}</router-link>
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