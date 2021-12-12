<template>
	<el-row v-if="loaded" type="flex" justify="center" align="center">
		<el-card shadow="never">
			<el-form ref="form" :model="event" label-position="top">
				<el-form-item label="Nom:">
					<el-input :disabled="formDisabled" v-model="event.name" placeholder="Nom de l'évenement"></el-input>
				</el-form-item>
				<el-form-item label="Visibilité:">
					<el-checkbox :disabled="formDisabled" v-model="event.public">Tout le monde peut voir la liste</el-checkbox>
				</el-form-item>
				<el-form-item label="Participants:">
					<el-select :disabled="formDisabled" :reserve-keyword="true" v-if="loaded" v-model="event.lists" multiple filterable allow-create default-first-option placeholder="Participants">
						<el-option v-for="item in lists" :key="item._id" :label="item.name" :value="item._id"> </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="Exceptions:">
					<div v-if="event.exceptions.length > 0">
						<el-row v-for="(exception, idx) in event.exceptions" :key="exception.senderId" type="flex" justify="left" :span="24" :sm="24" style="margin-bottom: 20px">
							<el-col :span="7">
								<el-select :disabled="formDisabled" v-model="exception.senderId" filterable @visible-change="setSenders" placeholder="Choisir...">
									<el-option v-for="item in senders" :key="item._id" :label="item.name" :value="item._id" :disabled="item.disabled"> </el-option>
								</el-select>
							</el-col>
							<el-col class="line" :span="6">ne donnera pas à</el-col>
							<el-col :span="7">
								<el-select @visible-change="setReceivers(idx)" :disabled="formDisabled" v-if="loaded" v-model="exception.receiverIds" multiple filterable default-first-option placeholder="Choisir...">
									<el-option v-for="item in receivers" :key="item._id" :label="item.name" :value="item._id" :disabled="item.disabled"> </el-option>
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
		<br />
		<br />
		<br />
		<br />
		<br />
	</el-row>
</template>

<script>
import store from '@/store';
import router from '@/router';
import fetchApi from "@/services/http";

export default {
	name: 'EventForm',
	props: {
		eventId: String
	},
	data() {
		return {
			event: {
				name: null,
				lists: [],
				exceptions: []
			},
			lists: [],
			loading: false,
			loaded: false,
			buttonLabel: 'Créer',
			senders: [],
			receivers: [],
			formDisabled: false,
		}
	},
	methods: {
		async onSubmit() {
			await this.createEvent(this.event);
			this.$notify({ title: 'Succès', message: "Un nouveau tirage au sort a été créé", type: 'success' });
			router.push({ name: 'Home' });
		},
		async getSenders() {
			return this.lists.filter(m => this.event && this.event.lists && this.event.lists.some(mbr => mbr === m._id)).map(m => Object.assign(m, { disabled: this.event.exceptions.some(mbr => `${mbr.senderId}` === `${m._id}`) }));
		},
		async setSenders() {
			this.senders = await this.getSenders();
		},
		async getReceivers(index = null) {
			return this.lists.filter(m => this.event && this.event.lists && this.event.lists.some(mbr => mbr === m._id)).map(m => Object.assign(m, { disabled: !!(index !== null && this.event.exceptions[index].senderId === m._id) }));
		},
		async setReceivers(idx) {
			this.receivers = await this.getReceivers(idx);
		},
		async createEvent(payload) {
			await fetchApi().post('/events', { event: payload });
			return true;
		},
		async getEvent(eventId) {
			let { data: event = null } = await fetchApi().get(`/events/${eventId}`);
			return event;
		},
		async getUserLists() {
			let { data: lists = [] } = await fetchApi().get(`/users/${this.currentUser._id}/lists`);
			return lists.filter(m => (!m.user || !m.user._id) || (m && m.user && m.user._id && this.event.lists.some(mbr => `${mbr}` === `${m._id}`))).map(list => { return { _id: `${list._id}`, name: `${list.name}` } });
		},
		async getLists() {
			let { data: lists = [] } = await fetchApi().get(`/users/${this.currentUser._id}/lists`);
			return lists.map(list => { return { _id: `${list._id}`, name: `${list.name}` } });
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
			this.lists = await this.getUserLists();
			this.senders = await this.getSenders();
			this.receivers = await this.getReceivers();

			this.loaded = true;
		} else {
			this.lists = await this.getLists();
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
