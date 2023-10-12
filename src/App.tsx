import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/App.scss";
import Home from "./pages/Home";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="users/:id" element={<Users />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
