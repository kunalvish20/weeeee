import { useEffect } from 'react'

export default function Services() {
  const services = [
    {
      icon: '📦',
      title: 'InventR@ — Inventory Management',
      desc: 'End-to-end inventory control with real-time tracking, barcode/QR scanning, automated reorder points, multi-warehouse management, and live analytics.',
      backgroundColor: 'ib'
    },
    {
      icon: '🛒',
      title: 'WSPro — Procurement Solution',
      desc: 'Intelligent procurement automation, vendor management, smart PO workflows, spend analytics, and contract lifecycle management.',
      backgroundColor: 'ip'
    },
    {
      icon: '🛒',
      title: 'Consulting Services',
      desc: 'Intelligent procurement automation, vendor management, smart PO workflows, spend analytics, and contract lifecycle management.',
      backgroundColor: 'ip'
    },
    {
      icon: '🔨',
      title: 'Auction Portal Development',
      desc: 'Feature-rich auction platforms with live bidding engines, automated lot management, payment gateway integration, fraud prevention.',
      backgroundColor: 'ia'
    },
    {
      icon: '💻',
      title: 'Custom Software Development',
      desc: 'Tailor-made enterprise applications and SaaS platforms built to your exact specifications with modern architectures.',
      backgroundColor: 'is'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      desc: 'Cross-platform iOS and Android apps with offline capabilities and seamless backend integration for field teams.',
      backgroundColor: 'ig'
    },
    {
      icon: '🔗',
      title: 'ERP & API Integration',
      desc: 'Seamless connectivity with SAP, Tally, Zoho, and 300+ tools. Unify your entire technology stack.',
      backgroundColor: 'ir'
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
              Solutions That <span className="si">Move</span><br/>
              Your Business Forward
            </h2>
            <p className="sp reveal">
              Precision-engineered software for modern enterprises — built to scale, integrate, and deliver measurable ROI.
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
