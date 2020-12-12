<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16">
			<div class="user">
				<UsersList />
			</div>
		</el-col>
	</el-row>
</template>

<script>
import UsersList from '@/components/UsersList.vue'

export default {
	name: 'Users',
	components: {
		UsersList
	}
}
</script>

<style lang="scss" scoped>
.user {
	transition: 0.2s;
	padding: 20px;
}
</style>
