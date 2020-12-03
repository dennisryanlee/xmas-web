<template>
	<div class="event-generator">
		<h3>Nouveau tirage au sort</h3>
		<el-form ref="form" :model="event" label-width="120px" label-position="right">
			<el-form-item label="Nom:">
				<el-input v-model="event.name"></el-input>
			</el-form-item>
			<el-form-item label="Participants:">
				<el-select v-model="event.users" multiple filterable :loading="loading">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="Exceptions:">
				<div v-if="event.exceptions.length > 0">
					<div v-for="(exception, idx) in event.exceptions" :key="exception.senderId">
						<el-col :span="7">
							<el-select v-model="exception.senderId" filterable :loading="loading">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
							</el-select>
						</el-col>
						<el-col class="line" :span="6">ne donnera pas à</el-col>
						<el-col :span="7">
							<el-select v-model="exception.receiverId" multiple filterable :loading="loading">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
							</el-select>
						</el-col>
						<el-col class="line" :span="4">
							<el-button type="danger" circle icon="el-icon-delete" @click="removeException(idx)"></el-button>
						</el-col>
					</div>
				</div>
				<div>
					<el-button type="text" icon="el-icon-edit" @click="addException">Ajouter une exception</el-button>
				</div>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" icon="el-icon-edit" @click="onSubmit">Create</el-button>
				<el-button>Cancel</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'EventGenerator',
	data() {
		return {
			event: {
				name: null,
				users: [],
				exceptions: []
			},
			options: [],
			loading: false
		}
	},
	methods: {
		onSubmit() {
			console.log('submit!');
		},
		addException() {
			this.event.exceptions.push({ senderId: null, receiverId: null })
		},
		removeException(index) {
			this.event.exceptions.splice(index, 1);
		}
	},
	mounted() {
		axios.get('http://localhost:5000/v1/xmas/users')
			.then(res => {
				let { data: users = [] } = res || {};

				this.options = users.map(user => {
					return { value: `${user._id}`, label: `${user.name}` };
				})
			})
			.catch(err => {
				console.log('ERROR: EventGenerator.vue#function - Error while getting users:', err);
			})
	}
}
</script>

<style scoped>
.event-generator {
	max-width: 70%;
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
