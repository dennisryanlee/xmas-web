<template>
	<div v-if="loaded" class="event-generator">
		<h3>Nouveau tirage au sort</h3>
		<el-form ref="form" :model="event" label-width="120px" label-position="right">
			<el-form-item label="Nom:">
				<el-input v-model="event.name"></el-input>
			</el-form-item>
			<el-form-item label="Participants:">
				<el-select v-model="event.users" multiple filterable :loading="loading">
					<el-option v-for="item in options" :key="item._id" :label="item.name" :value="item._id"> </el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="Exceptions:">
				<div v-if="event.exceptions.length > 0">
					<div v-for="(exception, idx) in event.exceptions" :key="exception.senderId">
						<el-col :span="7">
							<el-select v-model="exception.senderId" filterable :loading="loading">
								<el-option v-for="item in options" :key="item._id" :label="item.name" :value="item._id"> </el-option>
							</el-select>
						</el-col>
						<el-col class="line" :span="6">ne donnera pas à</el-col>
						<el-col :span="7">
							<el-select v-model="exception.receiverIds" multiple filterable :loading="loading">
								<el-option v-for="item in options" :key="item._id" :label="item.name" :value="item._id"> </el-option>
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
	name: 'EventForm',
	data() {
		return {
			event: {
				name: null,
				users: [],
				exceptions: []
			},
			options: [],
			loading: false,
			loaded: false
		}
	},
	methods: {
		onSubmit() {
			axios.post('http://localhost:5000/v1/xmas/events', { event: this.event })
				.then(() => {
					this.$notify({ title: 'Succès', message: "Un nouveau tirage au sort a été créé", type: 'success' });
					this.$router.push({ name: 'Home' });
				})
				.catch(err => {
					this.$notify({ title: 'Erreur', message: "Oups, quelque chose n'a pas fonctionné", type: 'error' });
					console.log('ERROR: EventForm.vue#function - Error while getting users:', err);
				})
		},
		addException() {
			this.event.exceptions.push({ senderId: null, receiverIds: [] })
		},
		removeException(index) {
			this.event.exceptions.splice(index, 1);
		}
	},
	mounted() {
		let { eventId = null } = this.$route.params || {};

		if (eventId && eventId !== 'new') {
			axios.get(`http://localhost:5000/v1/xmas/events/${eventId}`)
				.then(res => {
					let { data: event = null } = res || {};
					if (event) this.event = event;
				})
				.catch(err => {
					console.log('ERROR: EventForm.vue#function - Error while getting users:', err);
				})
		}

		axios.get('http://localhost:5000/v1/xmas/users')
			.then(res => {
				let { data: users = [] } = res || {};

				this.options = users.map(user => {
					return { _id: `${user._id}`, name: `${user.name}` };
				})
			})
			.catch(err => {
				console.log('ERROR: EventForm.vue#function - Error while getting users:', err);
			})

		setTimeout(() => { this.loaded = true; }, 200);
	}
}
</script>

<style scoped>
.event-generator {
	/* max-width: 70%; */
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
