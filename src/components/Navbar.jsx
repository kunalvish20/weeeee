import { useState } from 'react'

export default function Navbar({ navUp, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <nav className={`nav ${navUp ? 'up' : ''}`} aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="balizana Technologies home">
          <div>
            <div className="bmark" aria-hidden="true">
              <span>B</span>
            </div>
          </div>
          <div className="bname">
            <em>bali</em><span className="green">zana</span>
            <em> technologies</em>
          </div>
        </a>
        
        <div className="nav-c" role="navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#consulting">Consulting</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-r">
          <a href="#" className="nbg">Sign In</a>
          <a href="#contact" className="nbf">Get a Free Quote →</a>
        </div>

        <button 
          className="burg" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </nav>

      <div 
        className={`mmenu ${mobileMenuOpen ? 'show' : ''}`}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
        <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
        <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
        <a href="#consulting" onClick={() => setMobileMenuOpen(false)}>Consulting</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Free Quote</a>
      </div>
    </>
  )
}
