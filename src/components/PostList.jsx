import { Link, Outlet } from "react-router-dom";

const PostList = () => {
  // Simulation données
  const posts = [
    { id: 1, title: "Post 1", body: "Contenu du post 1" },
    { id: 2, title: "Post 2", body: "Contenu du post 2" },
  ];

  return (
    <>
      <h2>Liste des posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Link to={`/post/${post.id}`}>Voir le contenu</Link>
          <Outlet/>
        </div>
      ))}
    </>
  )
}

export default PostList;