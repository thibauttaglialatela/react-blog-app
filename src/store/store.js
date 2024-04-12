import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../store/slice/postSlice';
import commentsReducer from '../store/slice/commentSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,

    },
});

export default store
