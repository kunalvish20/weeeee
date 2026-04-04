import { useEffect } from 'react'

export default function CTA() {
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
    <section className="cta-sec" id="contact">
      <div className="sec-i">
        <div className="tag reveal">🚀 Start Your Project</div>
        <h2 className="sh2 reveal">
          Ready to Build Something<br/>
          <span className="si">Remarkable?</span>
        </h2>
        <p className="ctap reveal">
          Whether it's InventR@, WSPro, or a full enterprise platform — we're your technology partner.
        </p>
        <div className="ctabtns reveal">
          <a href="mailto:info@balizana.com" className="bwhite">Start Your Project →</a>
          <a href="tel:+919635088335" className="boutw">📞 Book a Free Call</a>
        </div>
      </div>
    </section>
  )
}
