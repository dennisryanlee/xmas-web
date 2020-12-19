<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16" :xs="24">
			<div class="user">
				<h3>Famille & Amis ✨</h3>
				<el-divider></el-divider>
				<br />

				<RelationsList />
			</div>
		</el-col>
	</el-row>
</template>

<script>
import RelationsList from '@/components/RelationsList.vue'

export default {
	name: 'Relations',
	components: {
		RelationsList
	}
}
</script>

<style lang="scss" scoped>
.user {
	transition: 0.2s;
	padding: 20px;
}
</style>
