import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import postServices from "../../services/postServices";

export const getAllPosts = createAsyncThunk("post/getAllPosts", async () => {
	const response = await postServices.getAll();
	return response.data;
});

const postSlice = createSlice({
	name: "post",
	initialState: {loadingState: "initial", posts: [] as any[]},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAllPosts.pending, (state, action) => {
			state.loadingState = "loading";
		}); // async işlem o an işlemde
		builder.addCase(getAllPosts.fulfilled, (state, action) => {
			state.loadingState = "loaded";
			state.posts = action.payload;
		}); // async işlem bitti ve başarılı cevap geldi: resolve();
		builder.addCase(getAllPosts.rejected, (state, action) => {
			state.loadingState = "error";
		}); // async işlem bitti ve başarısız bir cevap geldi: reject();
	},
});

export const postReducer = postSlice.reducer;