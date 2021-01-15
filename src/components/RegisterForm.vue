<template>
	<div class="register-form">
		<h3>Créer un compte</h3>
		<el-form ref="form" :model="user" label-position="right" v-on:submit.prevent="onSubmit">
			<el-form-item label="Identifiant:">
				<el-input v-model="user.username"></el-input>
			</el-form-item>
			<el-form-item label="Mot de Passe:">
				<el-input v-model="user.password" type="password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" native-type="submit" icon="el-icon-connection" @click="onSubmit">Créer un compte</el-button>
			</el-form-item>
		</el-form>
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
			store.dispatch("register", user);
		}

		return { user, onSubmit }
	}
}
</script>

<style scoped>
.register-form {
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
