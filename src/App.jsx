import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-xl">School Club</div>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-white hover:text-blue-200">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-blue-200">About</Link></li>
              <li><Link to="/projects" className="text-white hover:text-blue-200">Projects</Link></li>
            </ul>
          </div>
        </nav>

        <div className="container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;