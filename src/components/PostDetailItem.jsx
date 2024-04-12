import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import CommentsList from "./CommentsList.jsx";

const PostDetailItem = () => {
    const {id} = useParams();
    const post = useSelector(state =>
        state.posts.posts.find(post => post.id.toString() === id)
    );

    if (!post) {
        return <div>Post non trouvée</div>;
    }

    return (
        <>
            <h2>Détail du Post</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <CommentsList postId={post.id}/>
        </>
    );
}

export default PostDetailItem;
