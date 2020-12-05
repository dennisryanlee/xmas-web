<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="12" :xs="24">
			<LoginForm />
		</el-col>
	</el-row>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
	name: 'Login',
	components: {
		LoginForm
	}
}
</script>
