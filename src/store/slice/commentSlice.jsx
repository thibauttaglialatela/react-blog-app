import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk('comments/fetchComments',
    async (postId, {rejectWithValue}) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            return response.data;
        } catch (error) {
            console.error('error when fetch data', error);
            return rejectWithValue(error.message);
        }
    })
const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        comment: {
            postId: "",
            id: "",
            name: "",
            email: "",
            body: ""
        },
        loading: false,
        error: null
    },
    reducers: {
        setComment(state, action) {
            state.comment = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.loading = false;
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const {setComment} = commentSlice.actions;
export default commentSlice.reducer;
