import { useState } from 'react'

export default function Navbar({ navUp, mobileMenuOpen, setMobileMenuOpen, setPage }) {
  return (
    <>
      <nav className={`nav ${navUp ? 'up' : ''}`} aria-label="Main navigation">
        <div className="brand" onClick={() => setPage('home')} style={{ cursor: 'pointer' }} aria-label="balizana Technologies home">
          <img src="/Balizana_logo.jpeg" alt="Balizana Logo" className="brand-logo" />
          <div className="bname">
            <em>bali</em><span className="green">zana</span>
            <em> technologies</em>
          </div>
        </div>
        
        <div className="nav-c" role="navigation">
          <div className="nav-item-dropdown">
            <span onClick={() => { setPage('home'); setTimeout(() => { window.location.hash = '#services'; }, 100); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="nav-dropdown-menu">
              <a href="#services" onClick={() => setPage('home')} className="nav-dropdown-item">All Services</a>
              <a href="#services" onClick={() => setPage('home')} className="nav-dropdown-item">Inventory Management</a>
              <a href="#services" onClick={() => setPage('home')} className="nav-dropdown-item">Live Auctions</a>
              <a href="#services" onClick={() => setPage('home')} className="nav-dropdown-item">Procurement Software</a>
            </div>
          </div>
          <a href="#process" onClick={() => setPage('home')}>Process</a>
          <a href="#portfolio" onClick={() => setPage('home')}>Portfolio</a>
          <a href="#consulting" onClick={() => setPage('home')}>Consulting</a>
          <a href="#contact" onClick={() => setPage('home')}>Contact</a>
        </div>

        <div className="nav-r">
          {/* Sign In removed as requested */}
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
        <span onClick={() => { setPage('home'); setTimeout(() => { window.location.hash = '#services'; }, 100); setMobileMenuOpen(false); }} style={{fontWeight: 700, color: 'var(--navy)', cursor: 'pointer', padding: '10px 0', borderBottom: '1px solid var(--border)'}}>Services</span>
        <a href="#process" onClick={() => { setPage('home'); setMobileMenuOpen(false); }}>Process</a>
        <a href="#portfolio" onClick={() => { setPage('home'); setMobileMenuOpen(false); }}>Portfolio</a>
        <a href="#consulting" onClick={() => { setPage('home'); setMobileMenuOpen(false); }}>Consulting</a>
        <a href="#contact" onClick={() => { setPage('home'); setMobileMenuOpen(false); }}>Get Free Quote</a>
      </div>
    </>
  )
}
