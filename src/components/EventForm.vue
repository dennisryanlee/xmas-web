<template>
	<div v-if="loaded" class="event-form">
		<h3>Tirage au sort</h3>

		<el-row type="flex" justify="center">
			<el-card class="box-card" shadow="never">
				<el-row type="flex" align="center" justify="end">
					<el-col>
						<router-link v-if="event._id" :to="{ name: 'Draws', params: { eventId: event._id } }">Résultats</router-link>
					</el-col>
				</el-row>
				<el-form ref="form" :model="event" label-position="top">
					<el-form-item label="Nom:">
						<el-input :disabled="formDisabled" v-model="event.name" placeholder="Nom de l'évenement"></el-input>
					</el-form-item>

					<el-form-item label="Visibilité:">
						<el-checkbox :disabled="formDisabled" v-model="event.public">Tout le monde peut voir la liste</el-checkbox>
					</el-form-item>

					<el-form-item label="Participants:">
						<MultiSelect :disabled="formDisabled" v-model="event.users" :options="users" optionValue="_id" optionLabel="name" placeholder="Participants" display="chip" />
					</el-form-item>

					<el-form-item label="Exceptions:">
						<div v-if="event.exceptions.length > 0">
							<el-row v-for="(exception, idx) in event.exceptions" :key="exception.senderId" type="flex" justify="left" :span="24" :sm="24">
								<el-col :span="7">
									<el-select :disabled="formDisabled" v-model="exception.senderId" filterable @visible-change="setParticipants">
										<el-option v-for="item in participants" :key="item._id" :label="item.name" :value="item._id"> </el-option>
									</el-select>
								</el-col>
								<el-col class="line" :span="6">ne donnera pas à</el-col>
								<el-col :span="7">
									<MultiSelect :disabled="formDisabled" v-model="exception.receiverIds" :options="participants" @before-show="setParticipants" :filter="true" optionValue="_id" optionLabel="name" placeholder="Participants" display="chip" />
								</el-col>
								<el-col class="line" :span="4">
									<el-button :disabled="formDisabled" type="danger" circle icon="el-icon-delete" @click="removeException(idx)"></el-button>
								</el-col>
							</el-row>
						</div>

						<div>
							<el-button :disabled="formDisabled" type="text" icon="el-icon-circle-plus-outline" @click="addException">Ajouter une exception</el-button>
						</div>
					</el-form-item>

					<el-form-item>
						<el-button :disabled="formDisabled" type="primary" icon="el-icon-circle-plus-outline" @click="onSubmit">{{ buttonLabel }}</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		</el-row>
	</div>
</template>

<script>
import MultiSelect from 'primevue/multiselect';
import fetchApi from "@/services/http";

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
			participants: [],
			formDisabled: false
		}
	},
	methods: {
		async onSubmit() {
			await this.createEvent(this.event);
			this.$notify({ title: 'Succès', message: "Un nouveau tirage au sort a été créé", type: 'success' });
			this.$router.push({ name: 'Home' });
		},
		async getParticipants() {
			return this.users.filter(u => this.event && this.event.users && this.event.users.find(usr => usr === u._id));
		},
		async setParticipants() {
			this.participants = await this.getParticipants();
		},
		async createEvent(payload) {
			await fetchApi().post('/events', { event: payload });
			return true;
		},
		async getEvent(eventId) {
			let { data: event = null } = await fetchApi().get(`/events/${eventId}`);
			return event;
		},
		async getUsers() {
			let { data: users = [] } = await fetchApi().get('/users');
			return users.map(user => { return { _id: `${user._id}`, name: `${user.name}` } });
		},
		addException() {
			this.event.exceptions.push({ senderId: null, receiverIds: [] })
		},
		removeException(index) {
			this.event.exceptions.splice(index, 1);
		},
	},
	async mounted() {
		let { eventId = null } = this.$route.params || {};

		this.users = await this.getUsers();

		if (eventId && eventId !== 'new') {
			this.buttonLabel = 'Modifier';
			this.formDisabled = true;

			this.event = await this.getEvent(eventId);
			this.participants = await this.getParticipants();

			this.loaded = true;
		} else {
			this.loaded = true;
		}
	}
}
</script>

<style scoped lang="scss">
.event-form {
	transition: 0.2s;
	padding: 20px;
}

.p-multiselect {
	border-radius: 5px;
	width: 100%;
}
</style>

<style lang="scss" scoped>
.el-form--label-top .el-form-item__label {
	width: 100%;
}

.p-inputtext {
	display: flex;
	flex: 1 1 auto;
	padding: 0 0 0 0 !important;
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

.box-card {
	max-width: 100%;
}
</style>
