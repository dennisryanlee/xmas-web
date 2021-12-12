<template>
	<div class="container">
		<div class="row mt-lg-5">
			<div class="d-flex flex-column section-title align-items-start">
				<div class="d-flex w-100 section-title align-items-center justify-content-start d-inline-block">
					<div v-if="!isEditing">{{myTitle}}</div>
					<InputText v-if="isEditing" type="text" class="p-inputtext-sm" :placeholder="myTitle" v-model="myTitle" />
					<i class="pi pi-pencil ml-3" style="fontSize: 1rem" @click="isEditing = !isEditing"></i>
				</div>
				<small>proposé par Ann-Sophie</small>
			</div>
			<div class="col-12">

				<b-list-group>
					<draggable v-model="myList" group="people" @start="drag=true" @end="drag=false" item-key="id" handle=".card-before">
						<template #item="{element}">
							<b-list-group-item class="flex-row align-items-start ">
								<div class="card-before"></div>
								<div class="d-flex w-100 justify-content-between">
									<div class="d-flex justify-content-start">
										<h5 v-if="!element.edit" class="mb-1 ml-3">{{ element.title }}</h5>
										<InputText v-if="element.edit" type="text" class="mb-1 ml-3 p-inputtext-sm" placeholder="Choisir un titre" v-model="element.title" />
									</div>

									<small>Il y a {{Math.floor(Math.random() * 100)}} jours</small>
								</div>

								<div class="p-fluid mb-1 ml-3">
									<div>{{ element.description }}</div>
									<div class="p-field">
										<InputText v-if="element.edit" type="text" class="p-inputtext-sm" placeholder="Choisir une description" v-model="element.description" />
									</div>
								</div>

								<div class=" d-flex justify-content-end">
									<div class="d-flex w-100 align-items-center container">
										<span class="p-buttonset" v-if="element.edit">

											<Button label="Sauver" icon="pi pi-check" class="p-button-outlined p-button-sm" />
											<Button label="Annuler" icon="pi pi-times" class="p-button-outlined p-button-sm p-button-danger" />
										</span>
										<span class="p-buttonset" v-if="!element.edit">
                      <unicon viewBox="0 0 448 512" name="go-shopping-bag" height="1.1rem" fill="#2196F3" />
                      <i class="pi pi-trash"></i>
											
											<!-- <Button class="p-button-outlined p-button-sm">
                        
                      </Button>
											<Button icon="pi pi-trash" class="p-button-outlined p-button-sm p-button-danger" /> -->
										</span>
									</div>
									<Button v-b-toggle="`collapse-${element._id}`" type="button" label="Messages" icon="pi pi-comment" class="p-button-link" :badge="Math.floor(Math.random() * 10)" badgeClass="p-badge-info" />
								</div>
								<b-collapse :id="`collapse-${element._id}`" class="mt-2">
									<div class="container mt-5 mb-5">
										<div class="d-flex justify-content-center row">
											<div class="d-flex flex-column">
												<div class="coment-bottom bg-white p-2 px-4">
													<div class="d-flex flex-row add-comment-section mt-4 mb-4"><img class="img-fluid img-responsive rounded-circle mr-2" src="https://i.imgur.com/qdiP4DB.jpg" width="38"><input type="text" class="form-control mr-3" placeholder="Add comment"><button class="btn btn-primary" type="button">Comment</button></div>
													<div class="commented-section mt-2">
														<div class="d-flex flex-row align-items-center commented-user">
															<h5 class="mr-2">Corey oates</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">4 hours ago</span>
														</div>
														<div class="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
														<div class="reply-section">
															<div class="d-flex flex-row align-items-center voting-icons"><i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="ml-2">10</span><span class="dot ml-2"></span>
																<h6 class="ml-2 mt-1">Reply</h6>
															</div>
														</div>
													</div>
													<div class="commented-section mt-2">
														<div class="d-flex flex-row align-items-center commented-user">
															<h5 class="mr-2">Samoya Johns</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">5 hours ago</span>
														</div>
														<div class="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</span></div>
														<div class="reply-section">
															<div class="d-flex flex-row align-items-center voting-icons"><i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="ml-2">15</span><span class="dot ml-2"></span>
																<h6 class="ml-2 mt-1">Reply</h6>
															</div>
														</div>
													</div>
													<div class="commented-section mt-2">
														<div class="d-flex flex-row align-items-center commented-user">
															<h5 class="mr-2">Makhaya andrew</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">10 hours ago</span>
														</div>
														<div class="comment-text-sm"><span>Nunc sed id semper risus in hendrerit gravida rutrum. Non odio euismod lacinia at quis risus sed. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Enim facilisis gravida neque convallis a. In mollis nunc sed id. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Ultrices mi tempus imperdiet nulla malesuada pellentesque.</span></div>
														<div class="reply-section">
															<div class="d-flex flex-row align-items-center voting-icons"><i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="ml-2">25</span><span class="dot ml-2"></span>
																<h6 class="ml-2 mt-1">Reply</h6>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</b-collapse>
							</b-list-group-item>

						</template>
					</draggable>

					<div class="d-flex align-items-center container">
						<Button v-if="!isAdding" type="button" label="Ajouter une idée" icon="pi pi-plus-circle" class="p-button-sm" @click="add" />
					</div>

				</b-list-group>
			</div>
		</div>
	</div>
</template>

<script>
import draggable from 'vuedraggable';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

export default {
	name: 'WishesList',
	components: {
		Button,
		draggable,
		InputText
	},
	props: {
		title: String,
		wishes: Array
	},
	emits: ['update:wishes'],
	data() {
		return {
			// list: [
			// 	{ title: "Wish #1", description: "Lorem ipsum dolor sit amet. Qui accusamus sint non illo illo sit autem nisi. Id ducimus repellendus nam expedita fugiat id quasi maiores sit inventore totam non animi quos id dolorum omnis. Ut earum quia vel aliquid fuga ea harum quia aut voluptas dolorem in deleniti nobis ea quia iste. Sit odio nihil ea incidunt saepe ea corporis aspernatur?", id: 0, _id: 0 },
			// 	{ title: "Wish #2", description: "Non culpa dignissimos quo asperiores vero quo dicta similique. Et distinctio accusamus ab consequatur accusantium rem voluptatem quasi et facilis assumenda qui eius dolorum id nihil quia est unde commodi. Aut veritatis officiis sit soluta laborum sed beatae veniam qui quia quia vel consectetur voluptate sed placeat rerum ut nihil omnis.", id: 1, _id: 1 },
			// 	{ title: "Wish #3", description: "Et excepturi internos ut exercitationem galisum qui fugit architecto. In galisum officiis et exercitationem quas sed harum odit non suscipit Quis cum deleniti nobis. Qui quia dolores 33 possimus quia quo perspiciatis omnis rem molestiae laudantium qui reiciendis laboriosam.", id: 2, _id: 2 }
			// ],
			dragging: false,
			isEditing: false,
			isAdding: false,
		};
	},
	methods: {
		add() {
			this.isAdding = true
			this.myList.push({
				title: null,
				description: null,
				edit: true,
			})
		},
	},
	computed: {
		myList: {
			get() {
				return this.wishes
			},
			set(value) {
				console.log('HELLO')
				// this.$store.commit('update:wishes', value)
			}
		},
		myTitle: {
			get() {
				return this.title
			},
			set(value) {
				console.log('HELLO', value)
				// this.$store.commit('update:wishes', value)
				return value
			}
		}
	}
}
</script>

<style scoped>
.section-title {
	font-weight: bold;
	font-size: 1.3rem;
	padding-top: 10px;
	padding-bottom: 10px;
}
.bdge {
	height: 21px;
	background-color: orange;
	color: #fff;
	font-size: 11px;
	padding: 8px;
	border-radius: 4px;
	line-height: 3px;
}

.comments {
	text-decoration: underline;
	text-underline-position: under;
	cursor: pointer;
}

.dot {
	height: 7px;
	width: 7px;
	margin-top: 3px;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
}

.hit-voting:hover {
	color: blue;
}

.hit-voting {
	cursor: pointer;
}
</style>


<style lang="scss" scoped>
.card-before::before {
	content: "";
	background-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrows" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-arrows fa-w-16 fa-2x"><path fill="currentColor" d="M337.782 434.704l-73.297 73.782c-4.686 4.686-12.284 4.686-16.971 0l-73.296-73.782c-4.686-4.686-4.686-12.284 0-16.97l7.07-7.07c4.686-4.686 12.284-4.686 16.971 0L239 451.887h1V272H60.113v1l41.224 40.741c4.686 4.686 4.686 12.284 0 16.971l-7.071 7.07c-4.686 4.686-12.284 4.686-16.97 0L3.515 264.485c-4.686-4.686-4.686-12.284 0-16.971l73.782-73.297c4.686-4.686 12.284-4.686 16.971 0l7.071 7.071c4.686 4.686 4.686 12.284 0 16.971L60.113 239v1H240V60.113h-1l-40.741 41.224c-4.686 4.686-12.284 4.686-16.971 0l-7.07-7.071c-4.686-4.686-4.687-12.284 0-16.97l73.297-73.782c4.686-4.686 12.284-4.686 16.971 0l73.297 73.782c4.686 4.686 4.686 12.284 0 16.971l-7.071 7.071c-4.686 4.686-12.284 4.686-16.971 0L273 60.113h-1V240h179.887v-1l-41.224-40.741c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.686 12.284-4.686 16.97 0l73.782 73.297c4.687 4.686 4.686 12.284 0 16.971l-73.782 73.297c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L451.887 273v-1H272v179.887h1l40.741-41.224c4.686-4.686 12.284-4.686 16.971 0l7.07 7.071c4.686 4.685 4.686 12.283 0 16.97z" class=""></path></svg>');
	background-repeat: no-repeat;
	display: block;
	width: 30px;
	height: 30px;
	float: left;
	border: 1px solid rgba(0, 0, 0, 0.125);
	position: absolute;
	top: 0;
	left: 0;
	border-bottom-right-radius: 8px;
	filter: contrast(0.1);
	background-size: 20px;
	background-position: center;
}
</style>
