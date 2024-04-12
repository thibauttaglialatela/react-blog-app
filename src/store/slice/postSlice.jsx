import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (data) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return response.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (data) => {
  const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
  return response.data;
});


const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    post: {
      title: '',
      userId: 1,
      body: ''
  },
  },
  reducers: {
    setPost(state, action) {
      state.post = action.payload
  }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  }
});

export const { setPost } = postSlice.actions;
export default postSlice.reducer;