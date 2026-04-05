export default function Footer({ setPage }) {
  return (
    <footer>
      <div className="fi">
        <div className="fg">
          <div className="fgb">
            <div className="brand" onClick={() => setPage('home')} aria-label="balizana Technologies home">
              <img src="/Balizana_logo.jpeg" alt="Balizana Logo" className="brand-logo" />
              <div className="bname"><em>bali</em><span className="green">zana</span><em> technologies</em></div>
            </div>
            <p className="fp">
              We engineering elite custom software — scalable SaaS platforms, enterprise architecture, and legacy IT modernizations — that accelerate global business growth.
            </p>
            <div className="fsocs">
              <a href="#" className="fsc" aria-label="LinkedIn">in</a>
              <a href="#" className="fsc" aria-label="X">𝕏</a>
              <a href="#" className="fsc" aria-label="Facebook">fb</a>
            </div>
          </div>

          <div className="fc">
            <h5>Services</h5>
            <ul className="flinks">
              <li><a href="#services" onClick={() => setPage('home')}>Custom Software Dev</a></li>
              <li><a href="#services" onClick={() => setPage('home')}>Enterprise SaaS Platforms</a></li>
              <li><a href="#services" onClick={() => setPage('home')}>IT Engineering Solutions</a></li>
              <li><a href="#services" onClick={() => setPage('home')}>ERP Integration</a></li>
            </ul>
          </div>

          <div className="fc">
            <h5>Company</h5>
            <ul>
              <li><a href="#home" onClick={() => setPage('home')}>About Us</a></li>
              <li><a href="#portfolio" onClick={() => setPage('home')}>Portfolio</a></li>
              <li><a href="#" >Careers</a></li>
              <li><a href="#" >Blog</a></li>
            </ul>
          </div>

          <div className="fc">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:info@balizana.com" >info@balizana.com</a></li>
              <li><a href="tel:+919635088335">+91 96350 88335</a></li>
              <li style={{ fontSize: '0.85rem', color: 'var(--text3)', maxWidth: '200px' }}>Software Technology Park of India, Bhilai, Chhattisgarh.</li>
            </ul>
          </div>
        </div>

        <div className="fbot" style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginTop: '40px' }}>
          <div className="fcp">© 2026 balizana Technologies Pvt. Ltd. All rights reserved.</div>
          <div className="flinks">
            <span onClick={() => setPage('privacy')} style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span onClick={() => setPage('terms')} style={{ cursor: 'pointer' }}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
