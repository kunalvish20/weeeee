import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const projects = [
    {
      category: 'Enterprise SaaS',
      title: 'CloudSense Pro — B2B Architecture',
      tags: ['React', 'Node.js'],
      bg: 'pv1',
      icon: '📦',
      size: 'large'
    },
    {
      category: 'Cloud Architecture',
      title: 'CloudVault — Secure Data Systems',
      tags: ['Next.js', 'WebSockets'],
      bg: 'pv2',
      icon: '🔨'
    },
    {
      category: 'Legacy Modernization',
      title: 'FactoryOS — Production Tracking',
      tags: ['Python', 'Django'],
      bg: 'pv3',
      icon: '🏭'
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
    <section className="sec" id="portfolio">
      <div className="sec-i">
        <div className="sec-hd">
          <div>
            <div className="tag reveal">
              <span className="tdot"></span>Our Work
            </div>
            <h2 className="sh2 reveal">
              Projects We're<br/>
              <span className="si">Proud Of</span>
            </h2>
          </div>
        </div>

        <div className="pfilt reveal">
          {['All Projects', 'Enterprise SaaS', 'Cloud Architecture'].map((filter) => (
            <button 
              key={filter}
              className={`pfb ${activeFilter === filter ? 'on' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="pgrid">
          {projects.map((project, idx) => (
            <div key={idx} className={`pc reveal ${project.size === 'large' ? 'large' : ''}`}>
              <div className="pvis">
                <div className={`pvi ${project.bg}`}>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: '3.2rem'}}>{project.icon}</div>
                    <div style={{fontFamily: 'var(--font)', fontSize: '.82rem', fontWeight: '700', color: 'rgba(255,255,255,.35)'}}>
                      {project.title.split(' — ')[0]}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pov">
                <div className="pcat">{project.category}</div>
                <div className="ptit">{project.title}</div>
                <div className="ptags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="ptag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="plink">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
