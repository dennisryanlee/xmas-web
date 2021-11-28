<template>
	<div class="container mb-4 mb-lg-5">
		<div class="row mt-lg-5">
			<div class="col-12">
				<b-list-group>
					<b-list-group-item class="d-flex align-items-center" v-for="contact in contacts" :key="contact._id">
						<div class="list-description__user user-card row no-gutters">
							<div class="col-auto d-flex">
								<Avatar class="profile-picture profile-picture--small" :username="contact.user?.name || contact.name" :inline="true" :size="40" />
							</div>
							<div class="col-auto">
								<div class="user-card__infos">
									<router-link class="user-card__name" :to="`/users/${contact.user?._id}`">{{ contact.user?.name || contact.name }}</router-link>
									<span class="user-card__info">2 envies - liste privée</span>
								</div>
							</div>
						</div>
					</b-list-group-item>
				</b-list-group>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store';
import router from '@/router';
import fetchApi from "@/services/http";

import Avatar from '@/components/Avatar.vue';

export default {
	name: 'ContactsList',
	components: {
		Avatar
	},
	data() {
		return {
			contacts: []
		}
	},
	methods: {
		navigate(payload) {
			router.push(payload);
		},
		async getContacts(userId) {
			let { data: contacts = [] } = await fetchApi().get(`/users/${userId}/contacts`);

			contacts.sort(function (a, b) {
				if (a.name < b.name) { return -1; }
				if (a.name > b.name) { return 1; }
				return 0;
			})

			contacts.sort(function (a) {
				return a.user && a.user._id ? -1 : 1;
			})

			return contacts;
		}
	},
	computed: {
		currentUser: () => store.getters.getUser
	},
	async mounted() {
		this.contacts = await this.getContacts(this.currentUser._id);
	}
}
</script>

<style lang="scss" scoped>
.contacts-list__account {
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

	.contacts-list__inner-account {
		margin-top: 5px;
		margin-left: 10px;
		color: #606266;
	}
}
</style>
