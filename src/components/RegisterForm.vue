<template>
	<div class="container">
		<div class="row justify-content-center my-basis">
			<div class="col-md-5 px-4">
				<form class="button_to" method="post" action="/account/auth/facebook">
					<button class="session__facebook" type="submit" disabled="disabled">
						<unicon class="svg-inline--fa" viewBox="0 0 512 512" name="go-facebook" fill="white" width="2rem" />
						S'inscrire avec Facebook
					</button>
				</form>
				<div class="session__or"><span>OU</span></div>
				<form class="new_user" id="new_user" action="/account" accept-charset="UTF-8" :model="user" v-on:submit.prevent="onSubmit">
					<div class="form-row">
						<div class="col-md-6">
							<div class="form-group session__field">
								<b-form-input placeholder="Prénom" autocomplete="first-name" class="form-control" required="required" v-model="user.firstName"></b-form-input>
								<div class="form__errors"></div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group session__field">
								<b-form-input placeholder="Nom" autocomplete="last-name" class="form-control" required="required" v-model="user.lastName"></b-form-input>
								<div class="form__errors"></div>
							</div>
						</div>
					</div>
					<div class="form-group session__field">
						<b-form-input placeholder="Adresse e-mail" type="email" autocomplete="last-name" class="form-control" required="required" v-model="user.email"></b-form-input>
						<div class="form__errors"></div>
					</div>
					<div class="form-group session__field">
						<div class="input-group session__password">
							<b-form-input placeholder="Mot de passe" type="password" autocomplete="off" class="form-control" required="required" v-model="user.password"></b-form-input>
							<div class="input-group-append session__reveal">
								<span class="input-group-text">
									<unicon class="svg-inline--fa" viewBox="0 0 576 512" name="go-eye" width="2rem" />
								</span>
							</div>
						</div>
						<div class="session__password-constraints"><small class="session__password-help" id="password_length">Le mot de passe doit contenir au moins 8 caractères</small></div>
					</div>
					<div class="form-group session__field">
						<div class="custom-control custom-checkbox">
							<input name="user[terms_of_service_acceptance_check]" type="hidden" value="0"><input class="custom-control-input" type="checkbox" value="1" name="user[terms_of_service_acceptance_check]" id="user_terms_of_service_acceptance_check"><label class="custom-control-label" for="user_terms_of_service_acceptance_check">J'ai lu et j'accepte les</label> <a class="session__link" target="_blank" href="#">CGU</a> et la <a class="session__link" target="_blank" href="#">Politique de confidentialité</a>
						</div>
					</div>
					<span class="session__tooltip" data-placement="top" data-title="Veuillez accepter les conditions générales d'utilisation et la politique de confidentialité" data-tooltip="tooltip" data-original-title="" title=""><input type="submit" name="commit" value="Créer un compte" class="session__btn" id="session__submit" data-disable-with="S'inscrire"></span>
				</form>
				<div class="session__switch">Déjà inscrit sur doussay.com ? <a class="session__link sign-in-link" href="/login">Se connecter</a></div>
				<div class="session__privacy mb-0">Conformément à la réglementation applicable en matière de protection des données personnelles, vous pouvez exercer votre droit d'accès, rectification, suppression, limitation, opposition et portabilité des données vous concernant en nous contactant sur <a class="session__link" href="mailto:privacy@doussay.com">privacy@doussay.com</a></div>
				<div class="session__privacy">Ce site est protégé par reCAPTCHA et la <a class="session__link" href="https://policies.google.com/privacy">politique de confidentialité</a> et les <a class="session__link" href="https://policies.google.com/terms">conditions d'utilisation</a> de Google s'appliquent.</div>
			</div>
		</div>
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
