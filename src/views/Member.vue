<template>
	<el-row type="flex" justify="center">
		<el-col type="flex" :span="16" :xs="24">
			<div class="member">
				<h3>Page de {{ member.name }} 🌲</h3>

				<br />
				<el-divider></el-divider>
				<br />

				<DrawsList v-if="member._id" :memberId="member._id" :key="member._id" />

				<br />
				<el-divider></el-divider>
				<br />

				<h3>Les souhaits de {{member.name}} 🎁</h3>
				<br />

				<WishesList v-if="member._id" :memberId="member._id" :username="member.name" />

				<br />
				<br />
				<br />
			</div>
		</el-col>
	</el-row>
</template>

<script>
import fetchApi from "@/services/http";
import DrawsList from '@/components/DrawsList.vue'
import WishesList from '@/components/WishesList.vue'

export default {
	name: 'Member',
	components: {
		DrawsList,
		WishesList
	},
	data() {
		return {
			member: {}
		}
	},
	methods: {
		async getMember(memberId) {
			let { data: member = {} } = await fetchApi().get(`/members/${memberId}`)
			return member;
		}
	},
	async mounted() {
		let { memberId = null } = this.$route.params || {};
		this.member = await this.getMember(memberId);
	}
}
</script>

<style lang="scss" scoped>
.member {
	transition: 0.2s;
	padding: 20px;
}
</style>
