import axios from 'axios';
import store from "@/store";

let instance = axios.create({
	baseURL: process.env.VUE_APP_GOHUB_API_URL || 'none'
});

axios.interceptors.request.use((config) => {

	// WIP: need to get token from localstorage & vuex
	config.headers['token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYzdhYjlmNGRhM2YyMzFhYmUwMjc4NiJ9LCJpYXQiOjE2MDcxMjU5MjAsImV4cCI6MTYzODY2MTkyMH0.B7zIyFaiF0NyJYvyqn45reChT2cYFitfQitl6kfnqEw';
	return config;
})

export default {
	install: function (app) {
		app.config.globalProperties.$gohubApi = instance;
	}
}