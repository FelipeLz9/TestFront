import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.tsx';
import Horarios from './pages/Horarios.tsx';
import Instructores from './pages/Instructores.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/horarios" element={<Horarios />} />
            <Route path="/instructores" element={<Instructores />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
