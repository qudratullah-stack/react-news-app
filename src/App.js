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
            path="/sports"
            element={<NewsParent mode={mode} category="sports" />}
          />
          <Route
           
          
            path="/technology"
            element={<NewsParent mode={mode} category="technology" />}
          />
          <Route
            path="/business"
            element={<NewsParent mode={mode} category="business" />}
          />
          <Route
            path="/health"
            element={<NewsParent mode={mode} category="health" />}
          />
          <Route
            path="/general"
            element={<NewsParent mode={mode} category="general" />}
          />
          <Route
            path="/entertainment"
            element={<NewsParent mode={mode} category="entertainment" />}
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
