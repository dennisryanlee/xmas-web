<template>
	<div class="login-form">
		<h3>Bienvenue</h3>
		<el-form ref="form" :model="user" label-width="120px" label-position="right">
			<el-form-item label="Identifiant:">
				<el-input v-model="user.username"></el-input>
			</el-form-item>
			<el-form-item label="Mot de Passe:">
				<el-input v-model="user.password" type="password"></el-input>
			</el-form-item>
		</el-form>
		<el-button type="primary" icon="el-icon-arrow-right" @click="onSubmit">Connexion</el-button>
	</div>
</template>

<script>
import { reactive } from "vue";
import store from "@/store";

export default {
	name: 'LoginForm',
	setup() {
		let user = reactive({ username: "", password: "" });

		function onSubmit() {
			store.dispatch("login", user);
		}

		return { user, onSubmit }
	}
}
</script>

<style scoped>
.login-form {
	border: 1px solid #ebebeb;
	border-radius: 4px;
	transition: 0.2s;
	padding: 20px;
	margin: 20px;
}

.el-select,
.el-select .el-select__tags > span {
	display: block;
}
</style>
