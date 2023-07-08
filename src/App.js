import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sponser from "./components/Sponser"
import About from "./components/About"

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Sponser />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;







