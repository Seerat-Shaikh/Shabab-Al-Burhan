import React, { useEffect, useState } from 'react'
import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
      </Routes>
    </Router>

  );
}

export default App
