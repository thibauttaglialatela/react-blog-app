import {useDispatch, useSelector} from "react-redux";
import {selectComments} from "../store/selector/selector.js";
import {useEffect} from "react";
import {fetchComments} from "../store/slice/commentSlice.jsx";

const CommentsList = ({postId}) => {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);

    useEffect(() => {
        dispatch(fetchComments(postId));
    }, [dispatch, postId]);

    return (
        <>
            <h3>Liste des commentaires du post</h3>
            {
                comments.length > 0 ? (
                    comments.map(comment => (
                        <article key={comment.id}>
                            <div className="comment-header">
                                <span className="comment-author">{comment.name}</span>
                                <span className="comment-email">{comment.email}</span>
                            </div>
                            <div className="comment-body">
                                <p>{comment.body}</p>
                            </div>
                        </article>
                    ))
                ) : <p>No comment</p>
            }

        </>
    )
}

export default CommentsList;
