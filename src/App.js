import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";
import Cinemas from "./Components/Cinemas/Cinemas";
import Booking from "./Components/Booking/Booking";
import Payment from "./Components/Payment/Payment";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cinemas" element={<Cinemas />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Movie/*" element={<Movies />}></Route>
        <Route path="/Booking" element={<Booking />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
