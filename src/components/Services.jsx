import { useEffect } from 'react'

export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Custom Software Development',
      desc: 'Top-tier enterprise applications and robust SaaS platforms built to your exact specifications using modern IT architecture.',
      backgroundColor: 'is'
    },
    {
      icon: '🌐',
      title: 'Enterprise IT Solutions',
      desc: 'Comprehensive IT consulting, cloud migrations, and system architecture for enterprise digital transformations.',
      backgroundColor: 'ib'
    },

    {
      icon: '🔗',
      title: 'ERP & System Integration',
      desc: 'Seamless connectivity with SAP, Oracle, Zoho, and 300+ enterprise software tools to unify your technology stack.',
      backgroundColor: 'ir'
    },
    {
      icon: '🤖',
      title: 'AI & Data Engineering',
      desc: 'Intelligent automation, predictive analytics, and custom AI integration engineered specifically for your business data.',
      backgroundColor: 'ia'
    },
    {
      icon: '🛒',
      title: 'B2B Software Solutions',
      desc: 'Intelligent CRM automation, secure portals, and smart workflows custom-built for robust IT infrastructure.',
      backgroundColor: 'ip'
    }
  ]

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
    <section className="sec" id="services">
      <div className="sec-i">
        <div className="sec-hd">
          <div>
            <div className="tag reveal">
              <span className="tdot"></span>Our Services
            </div>
            <h2 className="sh2 reveal">
              Enterprise IT Services &amp; <span className="si">Custom</span><br/>
              Software Engineering
            </h2>
            <p className="sp reveal">
              Precision-engineered software development for modern enterprises — built to scale, integrate natively, and deliver measurable IT ROI.
            </p>
          </div>
          <a href="#contact" className="bmain reveal" style={{alignSelf: 'center'}}>
            All Services →
          </a>
        </div>

        <div className="svc-grid" role="region" aria-label="Services offered">
          {services.map((service, idx) => (
            <article key={idx} className="svc reveal">
              <div className={`sic ${service.backgroundColor}`} aria-hidden="true">{service.icon}</div>
              <h3 className="stit">{service.title}</h3>
              <p className="sdesc">{service.desc}</p>
              <a href="#" className="sarr" tabIndex="0">Explore →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
