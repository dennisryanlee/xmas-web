<template>
	<div class="container mb-4 mb-lg-5">
		<div class="row mt-lg-5">
			<div class="col-12">
				<b-list-group>
					<b-list-group-item class="d-flex align-items-center" v-for="(event, index) in events" :key="index">
						<div class="list-description__user user-card row no-gutters">
							<div class="col-auto">
								<div class="thumb__title thumb__title--bigger">{{event.name}}</div>
								<div class="user-card__infos">
									<div v-for="(draw, index) in event.draws" :key="index">
										<div>{{ draw.sender.name }} offre un cadeau à {{ draw.receiver.name }}</div>
									</div>
								</div>
							</div>
						</div>
					</b-list-group-item>
				</b-list-group>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EventsList',
	props: {
		events: Array,
	}
}
</script>
