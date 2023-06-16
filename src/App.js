import React from "react"
import "./index.css"
import { Route, Routes } from "react-router-dom"

import Home from "./routes/home"
import Contact from "./routes/Contact"
import Project from "./routes/Project"
import About from "./routes/About"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
