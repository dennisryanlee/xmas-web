<template>
	<div class="container">
		<div class="row mt-lg-5">
			<div class="col-12">
				<b-list-group>
					<b-list-group-item v-for="wish in wishes" :key="wish._id" href="#" v-b-toggle="`collapse-${wish._id}`" class="flex-column align-items-start">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">{{ wish.title }}</h5>
							<small>3 days ago</small>
						</div>
						<p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
						<small>Donec id elit non mi porta.</small>
						<div>
							<a v-b-toggle="`collapse-${wish._id}`" variant="primary">Voir les commentaires</a>
							<b-collapse :id="`collapse-${wish._id}`" class="mt-2">
								<div class="container mt-5">
									<div class="row d-flex justify-content-center">
										<div class="col-md-8">
											<div class="headings d-flex justify-content-between align-items-center mb-3">
												<h5>Unread comments(6)</h5>
												<div class="buttons">
													<span class="badge bg-white d-flex flex-row align-items-center">
														<span class="text-primary">Comments "ON"</span>
														<div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked /></div>
													</span>
												</div>
											</div>
											<div class="card p-3">
												<div class="d-flex justify-content-between align-items-center">
													<div class="user d-flex flex-row align-items-center">
														<img src="https://i.imgur.com/hczKIze.jpg" width="30" class="user-img rounded-circle mr-2" /> <span><small class="font-weight-bold text-primary">james_olesenn</small> <small class="font-weight-bold">Hmm, This poster looks cool</small></span>
													</div>
													<small>2 days ago</small>
												</div>
												<div class="action d-flex justify-content-between mt-2 align-items-center">
													<div class="reply px-4"><small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small></div>
													<div class="icons align-items-center"><i class="fa fa-star text-warning"></i> <i class="fa fa-check-circle-o check-icon"></i></div>
												</div>
											</div>
											<div class="card p-3 mt-2">
												<div class="d-flex justify-content-between align-items-center">
													<div class="user d-flex flex-row align-items-center">
														<img src="https://i.imgur.com/C4egmYM.jpg" width="30" class="user-img rounded-circle mr-2" /> <span><small class="font-weight-bold text-primary">olan_sams</small> <small class="font-weight-bold">Loving your work and profile! </small></span>
													</div>
													<small>3 days ago</small>
												</div>
												<div class="action d-flex justify-content-between mt-2 align-items-center">
													<div class="reply px-4"><small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small></div>
													<div class="icons align-items-center"><i class="fa fa-check-circle-o check-icon text-primary"></i></div>
												</div>
											</div>
											<div class="card p-3 mt-2">
												<div class="d-flex justify-content-between align-items-center">
													<div class="user d-flex flex-row align-items-center">
														<img src="https://i.imgur.com/0LKZQYM.jpg" width="30" class="user-img rounded-circle mr-2" /> <span><small class="font-weight-bold text-primary">rashida_jones</small> <small class="font-weight-bold">Really cool Which filter are you using? </small></span>
													</div>
													<small>3 days ago</small>
												</div>
												<div class="action d-flex justify-content-between mt-2 align-items-center">
													<div class="reply px-4"><small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small></div>
													<div class="icons align-items-center"><i class="fa fa-user-plus text-muted"></i> <i class="fa fa-star-o text-muted"></i> <i class="fa fa-check-circle-o check-icon text-primary"></i></div>
												</div>
											</div>
											<div class="card p-3 mt-2">
												<div class="d-flex justify-content-between align-items-center">
													<div class="user d-flex flex-row align-items-center">
														<img src="https://i.imgur.com/ZSkeqnd.jpg" width="30" class="user-img rounded-circle mr-2" /> <span><small class="font-weight-bold text-primary">simona_rnasi</small> <small class="font-weight-bold text-primary">@macky_lones</small> <small class="font-weight-bold text-primary">@rashida_jones</small> <small class="font-weight-bold">Thanks </small></span>
													</div>
													<small>3 days ago</small>
												</div>
												<div class="action d-flex justify-content-between mt-2 align-items-center">
													<div class="reply px-4"><small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small></div>
													<div class="icons align-items-center"><i class="fa fa-check-circle-o check-icon text-primary"></i></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="bg-white">
									<div class="d-flex flex-row fs-12">
										<div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
										<div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
										<div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
									</div>
								</div>
								<div class="bg-light p-2">
									<div class="d-flex flex-row align-items-start"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /><textarea class="form-control ml-1 shadow-none textarea"></textarea></div>
									<div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
								</div>
							</b-collapse>
						</div>
					</b-list-group-item>
				</b-list-group>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'WishesList',
	components: {},
	props: {
		wishes: Array
	}
}
</script>
