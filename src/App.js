import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sponser from "./components/Sponser"
import About from './components/About';
import Team from './components/Team';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sponser" element={<Sponser />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
    <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;

