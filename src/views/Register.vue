<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="12" :xs="24">
			<RegisterForm />
		</el-col>
	</el-row>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {
	name: 'Register',
	components: {
		RegisterForm
	}
}
</script>
