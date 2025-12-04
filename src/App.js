import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import CompetitionDetail from './pages/CompetitionDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-background-dark font-display text-white">
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
              <div className="layout-content-container flex flex-1 flex-col">
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:id" element={<ProjectDetail />} />
                  <Route path="/competitions/:id" element={<CompetitionDetail />} />
                </Routes>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
