import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import AboutUsPage from "./pages/AboutUsPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/about-page" element={<AboutUsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
