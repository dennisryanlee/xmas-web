<template>
	<div class="container">
		<div class="row justify-content-center my-basis">
			<div class="col-md-5 px-4">
				<form class="button_to" method="post" action="/">
					<button class="session__facebook" type="submit" disabled="true">
						<unicon viewBox="0 0 512 512" name="go-facebook" fill="white" width="1.5rem" />
						<span style="padding-left: 20px">Se connecter avec Facebook</span>
					</button><input type="hidden" name="authenticity_token" value="" />
				</form>
				<div class="session__or"><span>OU</span></div>
				<form class="new_user" id="new_user" accept-charset="UTF-8" :model="user" v-on:submit.prevent="onSubmit">
					<input type="hidden" name="authenticity_token" value="dxf7qcwiZO7fiQrJNs5jMQKirjE_jxxKL4jWrp8YD6jYyEemmx-AQhjx5EKqgyR10q5pkZGrTHWZHLD8ODteaA" />
					<div class="form-group session__field">
						<b-form-input placeholder="Pseudo" autocomplete="email" class="form-control" required="required" v-model="user.username"></b-form-input>
					</div>
					<div class="form-group session__field">
						<b-form-input autocomplete="off" placeholder="Mot de passe" class="form-control" required="required" type="password" v-model="user.password"></b-form-input>
					</div>
					<div class="row no-gutters justify-content-between mt-4">
						<div class="form-group session__field">
							<div class="custom-control custom-checkbox">
								<input name="user[remember_me]" type="hidden" value="0" />
								<input class="custom-control-input" type="checkbox" value="1" name="user[remember_me]" id="user_remember_me" />
								<label class="custom-control-label" for="user_remember_me">Se souvenir de moi</label>
							</div>
						</div>
						<div class="form-group session__field"><a class="session__link" href="/account/password/creer">Mot de passe oublié ?</a></div>
					</div>
					<b-button type="submit" name="commit" value="Se connecter" class="session__btn" data-disable-with="Se connecter" @click="onSubmit">Se connecter</b-button>
				</form>
				<div class="session__switch mb-4">Vous n'avez pas de compte ? <a class="session__link sign-up-link" href="/register">S'inscrire</a></div>
				<div class="session__switch session__switch--smaller">Votre compte est bloqué ? <a class="session__link" href="/account/unlock/creer">Débloquer</a></div>
			</div>
		</div>
	</div>
	<!-- <div class="login-form">
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
		<el-button type="primary" icon="el-icon-thumb" @click="onboard"><strong>Pas encore de compte</strong></el-button>
	</div> -->
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
			router.push({ name: 'Register' })
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
