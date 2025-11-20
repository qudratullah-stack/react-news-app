import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import NewsParent from "./component/NewsParent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState(false);

  if (mode === false) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "black";
  }
  return (
    <>
      <BrowserRouter>
        <Navbar
         
          toggleMode={() => setMode(!mode)}
          style={{
            backgroundColor: mode ? "#6c6767" : "#007bff",
            color: mode ? "white" : "black",
          }}
          mode={mode}
        />
        <Routes>
          <Route
            path="/"
            element={<NewsParent mode={mode} category="Sports" />}
          />
          <Route
           
          
            path="/Technology"
            element={<NewsParent mode={mode} category="Technology" />}
          />
          <Route
            path="/Business"
            element={<NewsParent mode={mode} category="Business" />}
          />
          <Route
            path="/Health"
            element={<NewsParent mode={mode} category="Health" />}
          />
          <Route
            path="/general"
            element={<NewsParent mode={mode} category="general" />}
          />
          <Route
            path="/Entertainment"
            element={<NewsParent mode={mode} category="Entertainment" />}
          />
          <Route
            path="/science"
            element={<NewsParent mode={mode} category="science" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
