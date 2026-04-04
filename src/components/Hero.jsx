import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const sibs = [...(e.target.parentElement?.querySelectorAll('.reveal') || [])]
        const i = sibs.indexOf(e.target)
        e.target.style.transitionDelay = Math.min(i * 0.07, 0.4) + 's'
        e.target.classList.add('in')
        obs.unobserve(e.target)
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hmesh" aria-hidden="true"></div>
      <div className="hgrid" aria-hidden="true"></div>
      
      <div className="hero-inner">
        <div>
          <div className="hero-pill">
            <span className="pill-chip">Premium</span>
            <span className="pill-txt">500+ Digital Transformations Delivered Globally</span>
          </div>
          
          <h1 className="hero-h1">
            Custom Software<br/>
            Development &amp; <span className="si">Enterprise</span><br/>
            IT Solutions
          </h1>
          
          <p className="hero-sub">
            balizana is a professional software engineering company. We deliver scalable custom software development, modern SaaS architecture, and enterprise IT consulting to accelerate your digital transformation.
          </p>
          
          <div className="hero-acts">
            <a href="#portfolio" className="bmain" role="button">Explore Our Work →</a>
            <a href="#contact" className="bghost" role="button">💬 Talk to an Expert</a>
          </div>
          
          <div className="hero-kpis">
            <div>
              <div className="kv">500<span>+</span></div>
              <div className="kl">Projects Done</div>
            </div>
            <div className="ksep" aria-hidden="true"></div>
            <div>
              <div className="kv">98<span>%</span></div>
              <div className="kl">Client Retention</div>
            </div>
            <div className="ksep" aria-hidden="true"></div>
            <div>
              <div className="kv">12<span>+</span></div>
              <div className="kl">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
