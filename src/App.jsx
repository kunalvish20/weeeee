import { useState, useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import SEO from './components/SEO'

const Services = lazy(() => import('./components/Services'))
const Process = lazy(() => import('./components/Process'))
const WhyUs = lazy(() => import('./components/WhyUs'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Consulting = lazy(() => import('./components/Consulting'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navUp, setNavUp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setNavUp(window.scrollY > 16)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <SEO />
      <Navbar navUp={navUp} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <Clients />
      <Suspense fallback={<div style={{minHeight: '100vh'}}></div>}>
        <Services />
        <Process />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Consulting />
        <CTA />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  )
}

export default App
