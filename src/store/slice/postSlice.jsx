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
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.unshift({...action.payload, id: state.posts.length + 2})
        state.post = { userId: 1, title: '', body: '' }; 
      });
  }
});

export const { setPostTitle, setPostBody } = postSlice.actions;
export default postSlice.reducer;