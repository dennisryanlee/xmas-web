<template>
	<div class="user-stats">
		<div class="user-stats__text">
			<span class="user-stats__count">{{ stats.wishes || 0 }}</span> idée(s)
		</div>
	</div>
</template>

<script>
import fetchApi from "@/services/http";

export default {
	name: 'Stats',
	props: {
		userId: {
			type: String,
		}
	},
	data() {
		return {
			stats: {}
		}
	},
	methods: {
		async getStats(userId) {
			let { data: stats = {} } = await fetchApi().get(`/users/${userId}/stats`)
			return stats;
		}
	},
	async mounted() {
		this.stats = await this.getStats(this.userId);
	}
}
</script>
