import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sponser from "./components/Sponser"

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Sponser />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;







