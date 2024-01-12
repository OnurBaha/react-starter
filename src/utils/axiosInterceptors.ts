import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/",
});

axiosInstance.interceptors.request.use(config => {
	// .. istek atılmadan hemen öncesi
	console.log("İstek atılıyor..");

	config.headers.Authorization = "MyToken";
	return config;
});

axiosInstance.interceptors.response.use(
	response => {
		console.log("Cevap geldi..");

		return response;
	},
	error => {
		console.log("hata geldi", error);
	},
);

export default axiosInstance;