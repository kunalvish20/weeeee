import { useEffect } from 'react'

export default function WhyUs() {
  const features = [
    { icon: '⚡', title: 'Blazing Performance', desc: 'Sub-100ms APIs, optimized queries for snappy experiences.' },
    { icon: '🔄', title: 'Agile Sprints', desc: 'Bi-weekly demos and live progress dashboard.' },
    { icon: '🛡️', title: 'Enterprise Security', desc: 'SOC 2 workflows, OWASP practices built-in.' },
    { icon: '📊', title: 'Data-Driven Results', desc: 'Built-in analytics for real usage data.' },
    { icon: '🌐', title: 'Infinite Scalability', desc: 'Auto-scaling infrastructure, zero-downtime release.' },
    { icon: '🤝', title: 'Dedicated Support', desc: 'Named account manager and SLA-backed team.' }
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
    <section className="why-sec">
      <div className="sec-i">
        <div style={{textAlign: 'center', maxWidth: '580px', margin: '0 auto'}}>
          <div className="tag reveal" style={{display: 'inline-flex'}}>
            <span className="tdot"></span>Why balizana
          </div>
          <h2 className="sh2 reveal" style={{textAlign: 'center'}}>
            Everything You Need to<br/>
            Build <span className="si">Something Great</span>
          </h2>
        </div>

        <div className="wgrid">
          {features.map((feature, idx) => (
            <div key={idx} className="wc reveal">
              <div className="wic">{feature.icon}</div>
              <div className="wtit">{feature.title}</div>
              <div className="wdesc">{feature.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
