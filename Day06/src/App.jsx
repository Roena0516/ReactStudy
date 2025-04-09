import { BrowserRouter } from "react-router-dom"
import { Routes, Route, Link } from "react-router-dom"
import UseEffect1 from "./useEffect1"
import Home from "./pages/home"
import About from "./pages/about"
import "./style.css"

function App() {

  return (
    <div>
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">소개</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
