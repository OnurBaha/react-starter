import axios, { AxiosResponse } from "axios";
import { Post } from "../models/post";

class PostService {
    getAll(): Promise<AxiosResponse<Post[], any>>{
        return axios.get<Post[]>(
			"https://jsonplacascdaseholder.typicode.com/posts",
		);
    }
}

export default new PostService();