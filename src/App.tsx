import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/About";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/o-nas" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default App;
