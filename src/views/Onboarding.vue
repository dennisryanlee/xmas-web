<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="12" :xs="24">
			<OnboardingForm />
		</el-col>
	</el-row>
</template>

<script>
import OnboardingForm from '@/components/OnboardingForm.vue'

export default {
	name: 'Onboarding',
	components: {
		OnboardingForm
	}
}
</script>
