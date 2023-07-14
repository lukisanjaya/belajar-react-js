import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
