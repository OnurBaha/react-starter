import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/",
});

axiosInstance.interceptors.request.use(
	config => {
		// .. istek atılmadan hemen öncesi
		console.log("İstek atılıyor..");

        config.headers.Authorization = "MyToken";
		return config;
	},
	error => {},
);

axiosInstance.interceptors.response.use(
	response => {
		console.log("Cevap geldi..");

		return response;
	},
	error => {
		alert("Hata");
	},
);

export default axiosInstance;