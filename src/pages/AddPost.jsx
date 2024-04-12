import { useDispatch, useSelector } from "react-redux";
import { addPost, setPostTitle, setPostBody} from "../store/slice/postSlice"; 
import { selectPost } from "../store/selector/selector";
import './AddPost.css'

const AddPost = () => {
   
    const dispatch = useDispatch();
    const post = useSelector(selectPost);
    const { title, body } = post;

    const handleChangeTitle = (e) => {
        dispatch(setPostTitle(e.target.value));
    };

    const handleChangeBody = (e) => {
        dispatch(setPostBody(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '' || body.trim() === '') {
            return; 
        }
        dispatch(addPost({post})); 
        console.log(post)
    };

    return (
        <form onSubmit={handleSubmit} className="add-post-form">
            <h1>Ajouter un post</h1>
            <div>
            <label htmlFor="title"></label>
            <input onChange={handleChangeTitle} value={title} type="text" name="title" placeholder="titre" />
            </div>
            <div>
            <label htmlFor="post-content"></label>
            <textarea onChange={handleChangeBody} value={body} name="post-content"  placeholder="contenu"></textarea>
            <input type="submit" value="Ajouter un post"/>
            </div>
        </form>
    );
}

export default AddPost;