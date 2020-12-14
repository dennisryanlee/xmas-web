<template>
	<div class="login-form">
		<h3>Bienvenue</h3>
		<el-form ref="form" :model="user" label-position="right" v-on:submit.prevent="onSubmit">
			<el-form-item label="Identifiant:">
				<el-input v-model="user.username"></el-input>
			</el-form-item>
			<el-form-item label="Mot de Passe:">
				<el-input v-model="user.password" type="password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" native-type="submit" icon="el-icon-connection" @click="onSubmit">Connexion</el-button>
			</el-form-item>
		</el-form>
		<el-button type="primary" icon="el-icon-thumb" @click="onboard"><strong>PREMIERE FOIS SUR LE SITE</strong></el-button>
	</div>
</template>

<script>
import { reactive } from "vue";
import store from "@/store";
import router from "@/router";

export default {
	name: 'LoginForm',
	setup() {
		let user = reactive({ username: "", password: "" });

		function onSubmit() {
			store.dispatch("login", user);
		}

		function onboard() {
			router.push({name: 'Onboarding' });
		}

		return { user, onSubmit, onboard }
	}
}
</script>

<style scoped>
.login-form {
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
