import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";
import Homepage from ",/pages/Homepage";
import Blog from ",/pages/Blog";
import SinglePost from ",/pages/SinglePost";
import ErrorPage from ",/pages/ErrorPage";

function App() {

  return (
    <>
    <BrowserRouter>
      {/* <Swicth> */}
      <header>
        {<Header/>}
      </header>
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
