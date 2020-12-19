<template>
	<el-col v-if="loaded" type="flex" justify="center" align="center">
		<el-card shadow="never">
			<el-form ref="form" :model="event" label-position="top">
				<el-form-item label="Nom:">
					<el-input :disabled="formDisabled" v-model="event.name" placeholder="Nom de l'évenement"></el-input>
				</el-form-item>

				<el-form-item label="Visibilité:">
					<el-checkbox :disabled="formDisabled" v-model="event.public">Tout le monde peut voir la liste</el-checkbox>
				</el-form-item>

				<el-form-item label="Participants:">
					<!-- <MultiSelect :disabled="formDisabled" v-model="event.members" :options="members" optionValue="_id" optionLabel="name" placeholder="Participants" display="chip" /> -->

					<el-select :disabled="formDisabled" :reserve-keyword="true" v-if="loaded" v-model="event.members" multiple filterable allow-create default-first-option placeholder="Participants">
						<el-option v-for="item in members" :key="item._id" :label="item.name" :value="item._id"> </el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="Exceptions:">
					<div v-if="event.exceptions.length > 0">
						<el-row v-for="(exception, idx) in event.exceptions" :key="exception.senderId" type="flex" justify="left" :span="24" :sm="24" style="margin-bottom: 20px">
							<el-col :span="7">
								<el-select @change="onChange" :disabled="formDisabled" v-model="exception.senderId" filterable @visible-change="setParticipants">
									<el-option v-for="item in participants" :key="item._id" :label="item.name" :value="item._id"> </el-option>
								</el-select>
							</el-col>
							<el-col class="line" :span="6">ne donnera pas à</el-col>
							<el-col :span="7">
								<!-- <MultiSelect :disabled="formDisabled" v-model="exception.receiverIds" :options="participants" @before-show="setParticipants" :filter="true" optionValue="_id" optionLabel="name" placeholder="Participants" display="chip" /> -->

								<el-select :disabled="formDisabled" v-if="loaded" v-model="exception.receiverIds" multiple filterable default-first-option placeholder="Choisir...">
									<el-option v-for="item in members" :key="item._id" :label="item.name" :value="item._id"> </el-option>
								</el-select>
							</el-col>
							<el-col class="line" :span="4">
								<el-button :disabled="formDisabled" type="danger" circle icon="el-icon-delete" @click="removeException(idx)"></el-button>
							</el-col>
						</el-row>
					</div>

					<div v-if="!formDisabled">
						<el-button :disabled="formDisabled" type="text" icon="el-icon-circle-plus-outline" @click="addException">Ajouter une exception</el-button>
					</div>
				</el-form-item>

				<el-form-item v-if="!formDisabled">
					<el-button :disabled="formDisabled" type="primary" icon="el-icon-circle-plus-outline" @click="onSubmit">{{ buttonLabel }}</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</el-col>
</template>

<script>
import store from '@/store';
import router from '@/router';

// import MultiSelect from 'primevue/multiselect';
import fetchApi from "@/services/http";

export default {
	name: 'EventForm',
	components: {
		// MultiSelect
	},
	props: {
		eventId: String
	},
	data() {
		return {
			event: {
				name: null,
				members: [],
				exceptions: []
			},
			members: [],
			loading: false,
			loaded: false,
			buttonLabel: 'Créer',
			participants: [],
			formDisabled: false,
		}
	},
	methods: {
		async onChange() {
			console.log('onchange');
		},
		async onSubmit() {
			await this.createEvent(this.event);
			this.$notify({ title: 'Succès', message: "Un nouveau tirage au sort a été créé", type: 'success' });
			router.push({ name: 'Home' });
		},
		async getParticipants() {
			return this.members.filter(m => this.event && this.event.members && this.event.members.find(mbr => mbr === m._id));
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
		async getUserMembers() {
			let { data: members = [] } = await fetchApi().get(`/users/${this.currentUser._id}/members`);
			return members.filter(m => (!m.user || !m.user._id) || (m && m.user && m.user._id && this.event.members.some(mbr => `${mbr}` === `${m._id}`))).map(member => { return { _id: `${member._id}`, name: `${member.name}` } });
		},
		async getRelations() {
			let { data: members = [] } = await fetchApi().get(`/users/${this.currentUser._id}/relations`);
			return members.map(member => { return { _id: `${member._id}`, name: `${member.name}` } });
		},
		addException() {
			this.event.exceptions.push({ senderId: null, receiverIds: [] })
		},
		removeException(index) {
			this.event.exceptions.splice(index, 1);
		},
	},
	computed: {
		currentUser: () => store.getters.getUser
	},
	async mounted() {
		if (this.eventId && this.eventId !== 'new') {
			this.buttonLabel = 'Modifier';
			this.formDisabled = true;

			this.event = await this.getEvent(this.eventId);
			this.members = await this.getUserMembers();
			this.participants = await this.getParticipants();

			this.loaded = true;
		} else {
			this.members = await this.getRelations();
			this.loaded = true;
		}
	}
}
</script>

<style lang="scss" scoped>
.event-form {
	transition: 0.2s;
	padding: 20px;
}

.p-multiselect {
	border-radius: 5px;
	width: 100%;
}

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

.el-select {
	width: 100%;
}
</style>
