//App.tsx
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import NoPage from "./components/NoPage.tsx";
import CardList from "./CardList";
import Home from "./components/Home";
import Detail from "./components/Detail.tsx";
import HomeAxios from "./components/AxiosHome.tsx";
import React, { useCallback, useState } from "react";
export default function App() {
  export let Context1 = React.createContext(''); //2-1. context생성

export default function App() {

 const [users, setUsers] = useState(["user1", "user2", "user3"]); 

//2-2.context값에 들어갈 변수 정의

 const [theme, setTheme] = useState("light"); //2-2

 const toggleTheme = useCallback(() => {//2-3. context값에 들어갈 함수 정의

   setTheme(theme === "light" ? "dark" : "light");

 }, [theme]);
 
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<HomeAxios />}></Route>
        <Route path = "/card" element = {<Card />}></Route>
        <Route path = "/cardlist" element = {<CardList />}></Route>
        <Route
          path="/detail/:id"
          element={
            <Detail />
          }
        ></Route>
        <Route path = "/*" element = {<NoPage />}></Route>
      </Routes>
    </div>

  );

}