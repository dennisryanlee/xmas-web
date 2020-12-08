<template>
	<div class="wishes-list">
		<el-row type="flex" justify="center" align="center">
			<el-col :span="12">
				<div v-for="(wish, index) in wishes" :key="wish._id">
					<el-row v-if="index !== wishEdit" type="flex" justify="center">
						<el-col class="wish-title" :span="10" type="flex" align="start">
							<div>{{ wish.title }} - {{ wish.price }}</div>
						</el-col>
						<el-col :span="2"><el-button type="primary" @click="editItem(index)" circle icon="el-icon-edit"></el-button></el-col>
					</el-row>

					<WishForm v-if="index === wishEdit" :editWish="wish" />
				</div>
				<WishForm />
			</el-col>
		</el-row>

		<br />
	</div>
</template>

<script>
import createHttp from "@/services/http";
import WishForm from '@/components/WishForm.vue';

export default {
	name: 'WishesList',
	components: {
		WishForm
	},
	data() {
		return {
			wishes: [],
			edit: false,
			wishEdit: null
		}
	},
	methods: {
		editItem(index) {
			this.wishEdit = index;
		}
	},
	mounted() {
		let http = createHttp(true);
		http.get('/wishes', { params: { userId: '5fc7ab9f4da3f231abe02786' } })
			.then(res => {
				let { data: wishes = [] } = res || {};
				this.wishes = wishes;
			})
			.catch(err => {
				console.log('ERROR: WishesList.vue#mounted - Error while getting wishes:', err);
			})
	}
}
</script>

<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
.wish-title {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
</style>
