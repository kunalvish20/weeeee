import { useEffect } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      stars: '★★★★★',
      quote: '"balizana built our entire inventory and auction system from scratch. The platform manages over 50,000 SKUs flawlessly."',
      initials: 'AK',
      name: 'Arjun Kapoor',
      role: 'Director of Operations, TradeHub',
      bg: 'ta'
    },
    {
      stars: '★★★★★',
      quote: '"Their WSPro procurement solution reduced our cycle time by 60%. Absolutely exceptional."',
      initials: 'SR',
      name: 'Sunita Rajan',
      role: 'CEO, AuctionBridge',
      bg: 'tb'
    },
    {
      stars: '★★★★★',
      quote: '"Modernized our legacy inventory system in 12 weeks. Operations team loves it."',
      initials: 'PM',
      name: 'Priya Mehta',
      role: 'CTO, LogiMart',
      bg: 'tc2'
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
    <section className="sec" style={{background: 'var(--off)'}}>
      <div className="sec-i">
        <div style={{textAlign: 'center', marginBottom: '52px'}}>
          <div className="tag reveal" style={{display: 'inline-flex'}}>
            <span className="tdot"></span>Client Stories
          </div>
          <h2 className="sh2 reveal" style={{textAlign: 'center'}}>
            Trusted by Leaders<br/>
            <span className="si">Across Industries</span>
          </h2>
        </div>

        <div className="tgrid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="tc reveal">
              <div className="tst">{testimonial.stars}</div>
              <div className="tq">{testimonial.quote}</div>
              <div className="tau">
                <div className={`tav ${testimonial.bg}`}>{testimonial.initials}</div>
                <div>
                  <div className="tn">{testimonial.name}</div>
                  <div className="tr">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
