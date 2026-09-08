import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Menu, X } from 'lucide-react';
import '../styles/Navigation.css';

function Navigation({ unit, toggleUnit }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Cloud size={24} />
          <span>Weather Dashboard</span>
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/compare" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Compare Cities
          </Link>
          
          <button className="unit-toggle" onClick={toggleUnit}>
            {unit === 'metric' ? '°F' : '°C'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
