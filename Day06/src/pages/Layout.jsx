import { Outlet, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Blogs from "./pages/blogs"
import Contact from "./pages/contact"
import NoPage from "./pages/NoPage"

export default function RouterTest() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    )
}