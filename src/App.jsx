import './App.css'
import {Routes, Route} from "react-router-dom"
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import PostDetailItem from '../src/components/PostDetailItem'
import PostList from '../src/components/PostList'

function App() {

  

  return (
    <>
    <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}>
                  <Route index element={<PostList />} />
                  <Route path="post/:id" element={<PostDetailItem />} />
                </Route>
                <Route path={'/add-post'}/>
                <Route path={'*'} element={<div>Oups cette page n'existe pas</div>} />
            </Routes>

    </>
  )
}

export default App
