import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './page/Home'
import About from './page/About'
import SinglePost from './page/SinglePost'
import Blog from './page/Blog'
import Projects from './page/Projects'
import NavBar from './components/NavBar.component'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route element={<Home />} path='/' exact />
          <Route element={<About />} path='/about' />
          <Route element={<SinglePost />} path='/post/:slug' />
          <Route element={<Blog />} path='/blog' />
          <Route element={<Projects />} path='/projects' />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
