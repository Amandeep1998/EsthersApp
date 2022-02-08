import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home/Home";
import Instagram from "./pages/Instagram";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instagram" element={<Instagram />} />
      </Routes>
    </>
  );
};

export default App;
