<template>
	<div class="container mb-4 mb-lg-5">
		<section class="profile-card mt-4 mt-lg-0 profile-card--user">
			<div class="row align-items-lg-center justify-content-lg-between">
				<slot name="avatar"></slot>
				<div class="col-12 text-center text-lg-left col-lg-7">
					<h2 class="user__name">{{ title }}</h2>
					<p class="user__description">{{ description }}</p>
					<slot name="stats"></slot>
				</div>
				<slot name="actionButtons"></slot>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Overview',
	props: {
		title: {
			type: String,
		},
		description: {
			type: String,
		}
	}
}
</script>
