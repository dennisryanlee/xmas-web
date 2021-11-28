<template>
	<footer class="footer">
		<div class="container">
			<div class="row pb-4 pt-5">
				<div class="col-md-4 text-center text-md-left">
					<img class="footer__brand" alt="Dousay.com" src="@/assets/brand/logo.svg" />
					<p class="footer__baseline">Informe ton entourage de tes souhaits.</p>
					<p class="footer__baseline">Doussay.com participe au Programme Partenaires d’Amazon EU. <br /><span class="text-mention" data-placement="top" data-title="Le programme partenaires d’Amazon EU est un programme d’affiliation conçu pour permettre à des sites de percevoir une rémunération grâce à la création de liens vers Amazon.fr." data-tooltip="tooltip" data-original-title="" title="">En savoir plus</span></p>
				</div>
				<div class="col-md-2 offset-md-2 text-center text-md-left">
					<ul class="footer__list">
						<h4 class="footer__title">Utilisation</h4>
						<li class="footer__item"><a class="footer__link" href="#">Centre d'aide</a></li>
						<li class="footer__item"><a class="footer__link" href="#">Ajoute une idée</a></li>
						<li class="footer__item"><a class="footer__link" href="#">Créer une Cacahuète</a></li>
						<li class="footer__item"><a class="footer__link" href="#">Contactez-nous</a></li>
						<li class="footer__item"><a class="footer__link" href="javascript:openAxeptioCookies()">Préférences Cookies</a></li>
					</ul>
				</div>
				<div class="col-md-2 text-center text-md-left">
					<ul class="footer__list">
						<h4 class="footer__title">A Propos</h4>
						<li class="footer__item"><a class="footer__link" href="#">Partenaires</a></li>
						<li class="footer__item"><a class="footer__link" href="#">Espace presse</a></li>
						<li class="footer__item"><a target="_blank" class="footer__link" href="#">Blog</a></li>
					</ul>
				</div>
				<div class="col-md-2 text-center text-md-right">
					<div class="footer__social-networks">
						<a class="footer__link-icon" alt="Suivez-nous sur Facebook" target="_blank" href="https://www.facebook.com">
							<unicon class="svg-inline--fa" viewBox="0 0 448 512" name="go-facebook-square" />
						</a>
						<a class="footer__link-icon" alt="Suivez-nous sur Twitter" target="_blank" href="https://twitter.com">
							<unicon class="svg-inline--fa" viewBox="0 0 512 512" name="go-twitter" />
						</a>
						<a class="footer__link-icon" alt="Suivez-nous sur Instagram" target="_blank" href="https://www.instagram.com">
							<unicon class="svg-inline--fa" viewBox="0 0 448 512" name="go-instagram" />
						</a>
					</div>
				</div>
			</div>
			<hr />
			<div class="row pb-3 align-items-center">
				<div class="col-12 col-md-6 text-center text-md-left">
					<p class="footer__copyright mb-0">© 2021 Doussay.com - Tous droits réservés</p>
				</div>
				<div class="col-12 col-md-6 text-center text-md-right d-flex justify-content-between"><a class="footer__link footer__link--smaller my-2 my-md-0" href="#">Conditions générales d'utilisation</a><a class="footer__link footer__link--smaller ml-md-4 my-2 my-md-0" href="#">Politique de confidentialité</a><a class="footer__link footer__link--smaller ml-md-4 my-2 my-md-0" href="#">Mentions légales</a></div>
			</div>
		</div>
	</footer>
</template>

<script>
import store from '@/store';

export default {
	name: 'Footer',
	computed: {
		currentUser: () => store.getters.getUser
	}
}
</script>
