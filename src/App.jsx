import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Homepage from "./pages/HomePage.jsx";
import Blog from "./pages/Blog.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      {/* <Swicth> */}
      <main>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:slug" element={<SinglePost/>}/> 
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </main>
      {/* </Swicth> */}
    </BrowserRouter>
    </>
  )
}

export default App
