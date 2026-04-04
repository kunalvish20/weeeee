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
          <div className="nav-item-dropdown">
            <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="nav-dropdown-menu">
              <a href="#services" className="nav-dropdown-item">All Services</a>
              <a href="#services" className="nav-dropdown-item">Inventory Management</a>
              <a href="#services" className="nav-dropdown-item">Live Auctions</a>
              <a href="#services" className="nav-dropdown-item">Procurement Software</a>
            </div>
          </div>
          <a href="#process">Process</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#consulting">Consulting</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-r">
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
        <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{fontWeight: 700, color: 'var(--navy)'}}>Services</a>
        <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{paddingLeft: '20px', fontSize: '0.9rem'}}>— Inventory Management</a>
        <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{paddingLeft: '20px', fontSize: '0.9rem'}}>— Live Auctions</a>
        <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{paddingLeft: '20px', fontSize: '0.9rem'}}>— Procurement</a>
        <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
        <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
        <a href="#consulting" onClick={() => setMobileMenuOpen(false)}>Consulting</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Free Quote</a>
      </div>
    </>
  )
}
