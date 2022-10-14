import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import Cinemas from "./Components/Cinemas/Cinemas";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/MovieDetail" element={<MovieDetail />}></Route>
        <Route path="/Cinemas" element={<Cinemas />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
