import axios, { AxiosResponse } from "axios";
import { Post } from "../models/post";
import axiosInstance from "../utils/axiosInterceptors";


class PostService {
    getAll(): Promise<AxiosResponse<Post[], any>>{
        return axiosInstance.get<Post[]>("posts");
	}

	getById(id: number): Promise<AxiosResponse<Post, any>> {
		return axiosInstance.get<Post>("posts/" + id);
    }
}

export default new PostService();