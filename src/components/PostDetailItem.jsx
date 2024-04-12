import { useParams } from "react-router-dom";

const PostDetailItem = () => {
  const { id } = useParams(); 


  return (
    <>
      <h2>Détail du Post</h2>
      <p>Affichage des détails pour le post ID: {id}</p>
    </>
  )
}

export default PostDetailItem;