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
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'))
const Terms = lazy(() => import('./components/Terms'))

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navUp, setNavUp] = useState(false)
  const [page, setPage] = useState('home') // 'home', 'privacy', 'terms'

  useEffect(() => {
    // Check initial path
    const path = window.location.pathname.replace('/', '')
    if (path === 'privacy' || path === 'terms') {
      setPage(path)
    }

    const handleScroll = () => {
      setNavUp(window.scrollY > 16)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateTo = (p) => {
    setPage(p)
    const newPath = p === 'home' ? '/' : `/${p}`
    window.history.pushState({}, '', newPath)
    window.scrollTo(0, 0)
    setMobileMenuOpen(false)
  }

  return (
    <div className="App">
      <SEO />
      <Navbar 
        navUp={navUp} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        setPage={navigateTo}
      />
      
      {page === 'home' ? (
        <>
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
          </Suspense>
        </>
      ) : (
        <Suspense fallback={<div style={{minHeight: '100vh'}}></div>}>
          {page === 'privacy' && <PrivacyPolicy />}
          {page === 'terms' && <Terms />}
        </Suspense>
      )}

      <Suspense fallback={null}>
        <Footer setPage={navigateTo} />
        <ScrollToTop />
      </Suspense>
    </div>
  )
}

export default App
