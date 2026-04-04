import { useEffect, useState } from 'react'

export default function Consulting() {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleBookClick = (expert) => {
    setSelectedExpert(expert);
    setIsSuccess(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExpert(null);
    setTimeout(() => setIsSuccess(false), 300);
    document.body.style.overflow = '';
  };
  const consultingCards = [
    {
      icon: '🎯',
      title: 'Discovery Workshop',
      desc: 'Deep-dive analysis & roadmap for legacy system modernization.',
      features: ['2-week engagement', 'Process audit & KPIs']
    },
    {
      icon: '🏛️',
      title: 'Cloud Advisory',
      desc: 'Cloud infrastructure & vendor strategy optimization.',
      features: ['Sourcing transformation', 'Cost reduction roadmap']
    },
    {
      icon: '📈',
      title: 'Digital Strategy',
      desc: 'Enterprise architecture & ERP modernization roadmap.',
      features: ['Tech stack evaluation', '12‑month transformation plan']
    }
  ]

  const experts = [
    {
      initials: 'RK',
      name: 'Raghav Khanna',
      role: 'Principal Consultant',
      bio: '15+ years in software architecture & enterprise digital transformation. Led 40+ SaaS deployment projects.'
    },
    {
      initials: 'SM',
      name: 'Shreya Mehta',
      role: 'Cloud Architect',
      bio: 'Former CPO, expert in WSPro implementation, sustainable sourcing & vendor ecosystems.'
    },
    {
      initials: 'AV',
      name: 'Amit Vyas',
      role: 'Tech Advisor & ERP Lead',
      bio: 'Specializes in API integrations & legacy modernization. Trusted advisor for 20+ enterprises.'
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
    <section className="sec" id="consulting" style={{background: 'var(--white)'}}>
      <div className="sec-i">
        <div style={{textAlign: 'center', marginBottom: '32px'}}>
          <div className="tag reveal" style={{display: 'inline-flex'}}>
            <span className="tdot"></span>Consulting
          </div>
          <h2 className="sh2 reveal" style={{textAlign: 'center'}}>
            Strategic <span className="si">Advisory</span> Services
          </h2>
          <p className="sp reveal" style={{margin: '12px auto 0', textAlign: 'center'}}>
            Expert-led consulting to transform your enterprise operations.
          </p>
        </div>

        <div className="consult-grid">
          {consultingCards.map((card, idx) => (
            <div key={idx} className="consult-card reveal">
              <div className="consult-icon">{card.icon}</div>
              <div className="consult-title">{card.title}</div>
              <div className="consult-desc">{card.desc}</div>
              {card.features.map((feature, i) => (
                <div key={i} className="consult-feature">✓ {feature}</div>
              ))}
              <a href="#contact" className="consult-cta">Inquire →</a>
            </div>
          ))}
        </div>

        <div style={{marginTop: '80px'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <div className="tag reveal" style={{display: 'inline-flex'}}>
              <span className="tdot"></span>Our Consulting Experts
            </div>
            <h3 className="sh2 reveal" style={{fontSize: '1.8rem'}}>
              Meet the <span className="si">Minds</span> Behind Your Success
            </h3>
          </div>

          <div className="experts-grid">
            {experts.map((expert, idx) => (
              <div key={idx} className="expert-card reveal">
                <div className="expert-img">{expert.initials}</div>
                <div className="expert-name">{expert.name}</div>
                <div className="expert-role">{expert.role}</div>
                <div className="expert-bio">{expert.bio}</div>
                <button className="btn-book" onClick={() => handleBookClick(expert)}>
                  📅 Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedExpert && (
        <div className="expert-modal-overlay" onClick={closeModal}>
          <div className="expert-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">×</button>
            <div className="modal-left">
              <div className="modal-img">{selectedExpert.initials}</div>
              <div className="modal-name">{selectedExpert.name}</div>
              <div className="modal-role">{selectedExpert.role}</div>
              <div className="modal-bio">{selectedExpert.bio}</div>
            </div>
            <div className="modal-right">
              {isSuccess ? (
                <div className="m-success">
                  <div className="ms-icon">✓</div>
                  <div className="ms-title">Request Sent!</div>
                  <div className="ms-desc">
                    Thank you. We'll be in touch shortly to confirm your booking with {selectedExpert.name}.
                  </div>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setIsSuccess(true); }}>
                  <h3 className="m-label" style={{ fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '24px' }}>Book a Strategy Session</h3>
                  <div className="m-form-grp">
                    <label className="m-label">Name</label>
                    <input type="text" className="m-input" required placeholder="John Doe" />
                  </div>
                  <div className="m-form-grp">
                    <label className="m-label">Work Email</label>
                    <input type="email" className="m-input" required placeholder="john@company.com" />
                  </div>
                  <div className="m-form-grp">
                    <label className="m-label">Preferred Date</label>
                    <input type="date" className="m-input" required />
                  </div>
                  <button type="submit" className="m-submit">Confirm Booking</button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
