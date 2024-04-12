import {Link, Outlet} from "react-router-dom";
const Home = () => {
  return (
    <>
    <h1>Share and Comment</h1>
    <p>L'appli pour partager toutes tes réflexions</p>
    <nav>
        <Link to="/">Liste des posts</Link> 
      </nav>
      <Outlet /> 

    </>
  )
}

export default Home 