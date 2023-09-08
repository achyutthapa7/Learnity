import React from "react";
import Welcomepage from "./components/Welcomepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Interests from "./components/Interests";
import Home from "./components/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcomepage />}></Route>
          <Route path="/interest" element={<Interests />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
