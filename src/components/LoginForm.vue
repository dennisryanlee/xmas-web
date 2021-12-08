<template>
	<div class="container">
		<div class="row justify-content-center my-basis">
			<div class="col-md-5 px-4">
				<form class="button_to" method="post" action="/">
					<button class="session__facebook" type="submit" disabled="true">
						<unicon viewBox="0 0 512 512" name="go-facebook" fill="white" width="1.5rem" />
						<span style="padding-left: 20px">Se connecter avec Facebook</span>
					</button>
				</form>
				<div class="session__or"><span>OU</span></div>
				<form class="new_user" id="new_user" accept-charset="UTF-8" :model="user" v-on:submit.prevent="onSubmit">
					<div class="form-group session__field">
						<b-form-input placeholder="Adresse e-mail ou pseudo" autocomplete="email" class="form-control" required="required" v-model="user.identifier"></b-form-input>
					</div>
					<div class="form-group session__field">
						<b-form-input autocomplete="off" placeholder="Mot de passe" class="form-control" required="required" type="password" v-model="user.password"></b-form-input>
					</div>
					<div class="row no-gutters justify-content-between mt-4">
						<div class="form-group session__field">
							<div class="custom-control custom-checkbox">
								<input name="user[recontact_me]" type="hidden" value="0" />
								<input class="custom-control-input" type="checkbox" value="1" name="user[recontact_me]" id="user_recontact_me" />
								<label class="custom-control-label" for="user_recontact_me">Se souvenir de moi</label>
							</div>
						</div>
						<div class="form-group session__field"><a class="session__link" href="#">Mot de passe oublié ?</a></div>
					</div>
					<b-button type="submit" name="commit" value="Se connecter" class="session__btn" data-disable-with="Se connecter" @click="onSubmit">Se connecter</b-button>
				</form>
				<div class="session__switch mb-4">Vous n'avez pas de compte ? <a class="session__link sign-up-link" href="/register">S'inscrire</a></div>
				<div class="session__switch session__switch--smaller">Votre compte est bloqué ? <a class="session__link" href="#">Débloquer</a></div>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive } from "vue";
import store from "@/store";
import router from "@/router";

export default {
	name: 'LoginForm',
	setup() {
		let user = reactive({ identifier: "", password: "" });

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
