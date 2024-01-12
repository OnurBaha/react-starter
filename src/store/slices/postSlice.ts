import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import postServices from "../../services/postServices";
import {Post} from "../../models/post";

export const getAllPosts = createAsyncThunk<Post[]>(
	"post/getAllPosts",
	async (thunkArg, thunkAPI) => {
		const state: any = thunkAPI.getState();

		if (state.post.posts.length > 0) {
			return thunkAPI.fulfillWithValue(state.post.posts);
		}
		try {
			const response = await postServices.getAll();
			return thunkAPI.fulfillWithValue(response.data);
		} catch (e: any) {
			return thunkAPI.rejectWithValue("Hata mesajı");
		}
	},
);

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
            console.log("hata alındı", action);
		}); // async işlem bitti ve başarısız bir cevap geldi: reject();
	},
});

export const postReducer = postSlice.reducer;