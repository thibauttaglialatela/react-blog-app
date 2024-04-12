import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data)
    return response.data;
  }
);

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (data) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
    console.log(response.data)
    return response.data;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    post: {
      userId: 1,
      id: '',
      title: '',
      body: ''
    },
    loading: false,
    error: null
  },
  reducers: {
    setPostTitle(state, action) {
      state.post.title = action.payload;
    },
    setPostBody(state, action) {
      state.post.body = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.unshift({...action.payload, id: state.posts.length + 1});
        state.post = { userId: 1, title: '', body: '' };
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setPostTitle, setPostBody } = postSlice.actions;
export default postSlice.reducer;