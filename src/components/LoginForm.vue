<template>
	<div class="login-form">
		<h3>Bienvenue</h3>
		<el-form ref="form" :model="user" label-width="80px" label-position="right">
			<el-form-item label="Nom:">
				<el-input v-model="user.name"></el-input>
			</el-form-item>
			<el-form-item label="Password:">
				<el-input v-model="user.password" type="password"></el-input>
			</el-form-item>
		</el-form>
		<el-button type="primary" icon="el-icon-arrow-right" @click="onSubmit">Login</el-button>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'LoginForm',
	data() {
		return {
			user: {
				name: null,
				password: null
			}
		}
	},
	methods: {
		onSubmit() {
			axios.post('http://localhost:5000/v1/xmas/login', { user: this.user })
				.then(() => {
					this.$notify({ title: 'Succès', message: "Un nouveau tirage au sort a été créé", type: 'success' });
					this.$router.push({ name: 'Home' });
				})
				.catch(err => {
					this.$notify({ title: 'Erreur', message: "Oups, quelque chose n'a pas fonctionné", type: 'error' });
					console.log('ERROR: EventForm.vue#function - Error while getting users:', err);
				})
		}
	}
}
</script>

<style scoped>
.login-form {
	border: 1px solid #ebebeb;
	border-radius: 4px;
	transition: 0.2s;
	padding: 20px;
	margin: 20px;
}

.el-select,
.el-select .el-select__tags > span {
	display: block;
}
</style>
