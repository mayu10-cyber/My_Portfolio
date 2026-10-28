import React, { useState, useEffect } from 'react';
import { studentProfile } from '../data/portfolioData';

/**
 * Navbar Component
 * Fixed, transparent glass header with smooth navigation and direct GitHub profile button.
 * Mobile navigation uses pure React state for 100% reliability.
 */
export const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills & Achievements' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'hobbies', label: 'Hobbies & Gallery' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`custom-navbar ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Brand Logo */}
          <div>
            <a
              href="#home"
              className="brand-logo"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              Mayuresh <span>Parab</span>
            </a>
            <span className="brand-subtitle">
              Atharva College of Engineering &bull; Mumbai
            </span>
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="d-none d-lg-flex align-items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-pill-custom ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Direct GitHub Profile Link & Mobile Toggle */}
          <div className="d-flex align-items-center gap-2">
            <a
              href={studentProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-github-btn"
              title="Visit GitHub Profile"
            >
              <i className="bi bi-github fs-6"></i>
              <span className="d-none d-sm-inline">GitHub</span>
            </a>

            {/* Pure React Mobile Dropdown */}
            <div className="position-relative d-lg-none">
              <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle Navigation"
              >
                <i className="bi bi-list fs-5"></i>
              </button>

              {mobileMenuOpen && (
                <div
                  className="dropdown-menu show shadow-lg border-0 position-absolute end-0 mt-2 p-2"
                  style={{
                    backgroundColor: '#FAF7F2',
                    borderRadius: '14px',
                    minWidth: '200px',
                    zIndex: 1050
                  }}
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`dropdown-item py-2 rounded-2 ${activeSection === item.id ? 'bg-white fw-bold text-danger' : ''}`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
