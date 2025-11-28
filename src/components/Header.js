import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/30 px-4 py-4 md:px-10 opacity-0 animate-fadeIn">
      <div className="flex items-center gap-4 text-white">
        <div className="text-primary">
          <span className="material-symbols-outlined text-2xl">code_blocks</span>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Abderaouf HAMMOUDA
        </h2>
      </div>
      <nav className="hidden flex-1 justify-end gap-8 md:flex">
        <div className="flex items-center gap-9">
          <Link 
            className={`text-sm font-medium leading-normal transition-colors ${
              isActive('/') ? 'text-primary' : 'text-white hover:text-primary'
            }`} 
            to="/"
          >
            Home
          </Link>
          <Link 
            className={`text-sm font-medium leading-normal transition-colors ${
              isActive('/about') ? 'text-primary' : 'text-white hover:text-primary'
            }`}
            to="/about"
          >
            About
          </Link>
          <Link 
            className={`text-sm font-medium leading-normal transition-colors ${
              isActive('/projects') ? 'text-primary' : 'text-white hover:text-primary'
            }`}
            to="/projects"
          >
            Projects
          </Link>
          <Link 
            className="text-white text-sm font-medium leading-normal transition-colors hover:text-primary" 
            to="#"
          >
            Contact
          </Link>
        </div>
      </nav>
      <button className="md:hidden text-white">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
};

export default Header;
