import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/slice/postSlice";
import { selectPosts } from "../store/selector/selector"; 

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts); 


  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  

  return (
    <>
      <h2>Liste des posts</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <Link to={`/post/${post.id}`}>Voir le contenu</Link>
            <Outlet />
          </div>
        ))
      ) : (
        <p>Aucun post à afficher.</p>
      )}
    </>
  );
}

export default PostList;