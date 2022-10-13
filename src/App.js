import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import MovieDetail from "./Components/MovieDetail/MovieDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/MovieDetail" element={<MovieDetail />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
