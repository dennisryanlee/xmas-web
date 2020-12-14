<template>
	<div class="onboarding-form">
		<h3>Qui es-tu ?</h3>
		<el-form ref="form" :model="user" label-position="right" v-on:submit.prevent="onSignup">
			<el-form-item label="Trouve ton prénom dans la liste:">
				<el-select v-model="user._id" filterable>
					<el-option v-for="item in users" :key="item._id" :label="item.name" :value="item._id"> </el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="Choisir un mot de passe:">
				<el-input v-model="user.password" type="password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" native-type="submit" icon="el-icon-connection" @click="onSignup">Register</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import { reactive } from "vue";
import store from "@/store";
import fetchApi from "@/services/http";

export default {
	name: 'OnboardingForm',
	setup() {
		let users = [];
		let user = reactive({ _id: "", password: "" });

		function onSignup() {
			store.dispatch("signup", user);
		}

		return { users, user, onSignup }
	},
	methods: {
		async getUsers() {
			let { data: users = [] } = await fetchApi().get('/public/users');
			return users;
		}
	},
	async mounted() {
		this.users = await this.getUsers();
	}
}
</script>

<style scoped>
.onboarding-form {
	margin-top: -30vh;
	border: 1px solid #ebebeb;
	border-radius: 4px;
	transition: 0.2s;
	padding: 20px;
	background-color: #fff;
	color: #24336b;
}

.el-select,
.el-select .el-select__tags > span {
	display: block;
}
</style>
