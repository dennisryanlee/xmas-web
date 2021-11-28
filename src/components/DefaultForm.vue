<section class="form">
		<div class="container mb-4 mb-lg-5">
			<div class="row mt-4 mt-lg-5">
				<div class="col-12">
					<h1 class="form__title d-none d-lg-block">Création d'une nouvelle liste</h1>
					<p class="form__subtitle mb-5 d-none d-lg-block">Personnalisez votre liste, cela vous permettra d'avoir une présentation sympa si vous la partagez avec vos proches.</p>
					<form class="new_lists_basic" id="new_lists_basic" enctype="multipart/form-data" action="/listes" accept-charset="UTF-8" method="post">
						<input type="hidden" name="authenticity_token" value="nd1g22n5tRJESE8zAT-MK2Fd10W8bQzdFWFWF4JfYnjK1CtMg2vOjERRoVsyTN-W9KVhs9iNz8J4L67KZrD8yA" /><input value="null" type="hidden" name="lists_basic[product]" id="lists_basic_product" />
						<div class="row">
							<div class="col-md-6">
								<div class="form__group">
									<label class="form__label form__label--mandatory" for="lists_basic_name">Nom de la liste</label><input class="form__field" placeholder="Ex: Inspiration déco" type="text" name="lists_basic[name]" id="lists_basic_name" />
									<div class="form__errors"></div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form__group">
									<label class="form__label" for="lists_basic_private">Type de liste</label
									><select class="form__field form__field-select custom-select" name="lists_basic[private]" id="lists_basic_private">
										<option selected="selected" value="false">Liste publique</option>
										<option value="true">Liste privée</option>
									</select>
									<div class="form__errors"></div>
								</div>
							</div>
						</div>
						<div class="form__group">
							<label class="form__label" for="lists_basic_description">Description (facultatif)</label><textarea rows="3" class="form__field" placeholder="Ex: Je regroupe ici toutes les idées que je trouve pour meubler mon futur appartement." name="lists_basic[description]" id="lists_basic_description"></textarea>
							<div class="form__errors"></div>
						</div>
						<div class="form__group position-relative">
							<label class="form__label" for="lists_basic_cover">Image de couverture (facultatif)</label
							><label class="form__file-label form__file-label--list" for="lists_basic_cover"
								><div class="form__file-choice">Choisir une image</div>
								<div class="form__file-extension">Fichiers PNG, JPG ou GIF</div>
								<img class="d-none" id="form__placeholder" src="" /><canvas class="form__previewer form__previewer--list" id="form__previewer"></canvas></label
							><input class="form__file-list form__file-list--for-list" accept="image/jpeg, image/png, image/jpg, image/gif" ondragover="allowDrop(event)" type="file" name="lists_basic[cover]" id="lists_basic_cover" />
							<div class="form__errors"></div>
						</div>
						<div class="row mt-5">
							<div class="col-12">
								<h1 class="form__title">Adresse postale (facultatif)</h1>
								<p class="form__subtitle mb-5">L'adresse postale peut être utile si vous partagez votre liste avec de la famille distante. Celle-ci reste privée et ne sera divulguée qu'à vos invités.</p>
							</div>
							<div class="col-md-6">
								<div class="form__group">
									<label class="form__label" for="lists_basic_street">Adresse</label><input class="form__field" placeholder="4 Rue des Tanneurs" type="text" name="lists_basic[street]" id="lists_basic_street" />
									<div class="form__errors"></div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form__group">
									<label class="form__label" for="lists_basic_city">Ville</label><input class="form__field" placeholder="Lille" type="text" name="lists_basic[city]" id="lists_basic_city" />
									<div class="form__errors"></div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form__group">
									<label class="form__label" for="lists_basic_zip_code">Code postal</label><input class="form__field" placeholder="59800" type="number" name="lists_basic[zip_code]" id="lists_basic_zip_code" />
									<div class="form__errors"></div>
								</div>
							</div>
						</div>
						<div class="form__footer mt-2">
							<a class="form__link d-none d-lg-block" href="/profil/gautier">
                <unicon viewBox="0 0 448 512" name="go-arrow-left" />Retour</a>
              <input type="submit" name="commit" value="Créer la liste" class="form__btn" data-disable-with="Création en cours..." />
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>