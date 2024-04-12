import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk('comments/fetchComments',
    async (data) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        return response.data;
    } catch (error) {
        console.error('error when fetch data', error);
    }
    })
const commentSlice = createSlice( {
    name: 'comments',
    initialState: {
        comments: [],
        comment: {
            postId: "",
            id: "",
            name: "",
            email: "",
            body: ""
        }
    },
    reducers: {
        setComment(state, action) {
            state.comment = action.payload
        }
    }
})

export const {setComment} = commentSlice.actions;
export default commentSlice.reducer;
