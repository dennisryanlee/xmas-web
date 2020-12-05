import { createStore } from 'vuex';
import createHttp from "@/services/http";
import router from "@/router";

export default createStore({
	state: {
		token: localStorage.getItem('xmas_token') || '',
		expiration: localStorage.getItem('xmas_token_expiration') || Date.now(),
		isBusy: false,
		error: ""
	},
	mutations: {
		setBusy: (state) => state.isBusy = true,
		clearBusy: (state) => state.isBusy = false,
		setError: (state, error) => state.error = error,
		clearError: (state) => state.error = "",
		setToken: (state, model) => {
			state.token = model.token;
			state.expiration = new Date(model.expiration)

			localStorage.setItem('xmas_token', model.token)
			localStorage.setItem('xmas_token_expiration', new Date(model.expiration))
		},
		clearToken: (state) => {
			state.token = "";
			state.expiration = Date.now();
			localStorage.setItem('xmas_token', "")
			localStorage.setItem('xmas_token_expiration', Date.now())
		}
	},
	getters: {
		isAuthenticated: (state) => state.token.length > 0 && new Date(state.expiration) > Date.now()
	},
	actions: {
		login: async ({ commit }, model) => {
			try {
				commit("setBusy");
				commit("clearError");
				const http = createHttp(false); // unsecured
				const result = await http.post("/login", model);

				if (result.data) {
					commit("setToken", result.data);
					router.push("/");
				}
				else {
					commit("setError", "Authentication Failed");
				}
			} catch {
				commit("setError", "Failed to login");
			} finally {
				commit("clearBusy");
			}
		},
		logout: ({ commit }) => {
			commit("clearToken");
			router.push("/login");
		}
	}
})