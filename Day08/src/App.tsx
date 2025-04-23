//App.tsx
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import NoPage from "./components/NoPage.tsx";
import CardList from "./CardList";
import Home from "./components/Home";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/card" element = {<Card />}></Route>
        <Route path = "/cardlist" element = {<CardList />}></Route>
        <Route path = "/*" element = {<NoPage />}></Route>
      </Routes>
    </div>

  );

}