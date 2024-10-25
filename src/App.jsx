import React from "react";

import { Routes, Route, useHref, useNavigate } from "react-router-dom";

import { RouterProvider } from "react-aria-components";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  let navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <Navbar />
      <div className="min-h-screen">
        <div className="container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </RouterProvider>
  );
}

export default App;
