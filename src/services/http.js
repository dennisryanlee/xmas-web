import axios from "axios";
import store from "@/store";


export default function fetchApi(secured = true) {
	if (secured) {
		return axios.create({
			baseURL: process.env.VUE_APP_GOHUB_API_URL || 'none',
			headers: {
				// "Authorization": `bearer ${store.state.token}`,
				"token": `${store.state.token}`
			}
		});
	} else {
		return axios.create({
			baseURL: process.env.VUE_APP_GOHUB_API_URL || 'none'
		});
	}
} 
