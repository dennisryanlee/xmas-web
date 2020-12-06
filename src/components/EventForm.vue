<template>
	<div v-if="loaded" class="event-form">
		<h3>Nouveau tirage au sort</h3>
		<el-form ref="form" :model="event" label-position="top">
			<el-form-item label="Nom:">
				<el-input v-model="event.name" placeholder="hello"></el-input>
			</el-form-item>

			<el-form-item label="Participants:">
				<MultiSelect v-model="event.users" :options="users" optionValue="_id" optionLabel="name" placeholder="Participants" display="chip" />
			</el-form-item>

			<el-form-item label="Exceptions:">
				<div v-if="event.exceptions.length > 0">
					<el-row v-for="(exception, idx) in event.exceptions" :key="exception.senderId" type="flex" justify="left" :span="24" :sm="24">
						<el-col :span="7">
							<el-select v-model="exception.senderId" filterable @visible-change="getParticipants">
								<el-option v-for="item in participants" :key="item._id" :label="item.name" :value="item._id"> </el-option>
							</el-select>
						</el-col>
						<el-col class="line" :span="6">ne donnera pas à</el-col>
						<el-col :span="7">
							<MultiSelect v-model="exception.receiverIds" :options="participants" @before-show="getParticipants" :filter="true" optionValue="_id" optionLabel="name" placeholder="Participants" display="chip" />
						</el-col>
						<el-col class="line" :span="4">
							<el-button type="danger" circle icon="el-icon-delete" @click="removeException(idx)"></el-button>
						</el-col>
					</el-row>
				</div>

				<div>
					<el-button type="text" icon="el-icon-edit" @click="addException">Ajouter une exception</el-button>
				</div>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" icon="el-icon-magic-stick" @click="onSubmit">{{ buttonLabel }}</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import MultiSelect from 'primevue/multiselect';
import createHttp from "@/services/http";

export default {
	name: 'EventForm',
	components: {
		MultiSelect
	},
	data() {
		return {
			event: {
				name: null,
				users: [],
				exceptions: []
			},
			users: [],
			loading: false,
			loaded: false,
			buttonLabel: 'Créer',
			participants: []
		}
	},
	methods: {
		getParticipants() {
			this.participants = this.users.filter(u => this.event && this.event.users && this.event.users.find(usr => usr === u._id))
			return true;
		},
		onSubmit() {
			let http = createHttp(true);
			http.post('/events', { event: this.event })
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

		let http = createHttp(true);
		http.get('/users')
			.then(res => {
				let { data: users = [] } = res || {};

				this.users = users.map(user => {
					return { _id: `${user._id}`, name: `${user.name}` };
				})
			})
			.catch(err => {
				console.log('ERROR: EventForm.vue#function - Error while getting users:', err);
			})

		if (eventId && eventId !== 'new') {
			this.buttonLabel = 'Modifier';

			let http = createHttp(true);
			http.get(`/events/${eventId}`)
				.then(res => {
					let { data: event = null } = res || {};
					if (event) this.event = event;
					this.participants = this.users.filter(u => this.event && this.event.users && this.event.users.find(usr => usr === u._id))
				})
				.catch(err => {
					console.log('ERROR: EventForm.vue#function - Error while getting users:', err);
				})
		}

		setTimeout(() => { this.loaded = true; }, 600);
	}
}
</script>

<style scoped lang="scss">
.event-form {
	border: 1px solid #ebebeb;
	border-radius: 4px;
	transition: 0.2s;
	padding: 20px;
}

.p-multiselect {
	border-radius: 5px;
	width: 100%;
}
</style>

<style>
.el-form--label-top .el-form-item__label {
	width: 100%;
}

.p-inputtext {
	display: flex;
	flex: 1 1 auto;
	padding: 0 0 0 0 !important;
	/* color: #bbb !important; */
	/* font-size: 12px !important; */
}

.p-dropdown {
	max-height: 40px;
	padding: 0 0 0 10px !important;
	display: flex;
	width: 100%;
}

.p-dropdown-item {
	display: flex;
	flex: 1 1 auto;
}

.p-multiselect-label {
	max-height: 40px;
}

.p-multiselect .p-multiselect-label {
	padding: 0 0 0 10px !important;
	display: flex;
	width: 100%;
}

.p-placeholder {
	max-height: 40px;
	color: #bbb !important;
	font-size: 12px !important;
}

.p-multiselect.p-multiselect-chip .p-multiselect-token {
	max-height: 40px;
	margin: 5px 5px 5px 1px;
}
</style>
