import { useEffect } from 'react'

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Requirements',
      desc: 'Deep-dive workshops to map business goals.'
    },
    {
      num: '02',
      title: 'Architecture & Design',
      desc: 'Scalable architecture and high-fidelity prototypes.'
    },
    {
      num: '03',
      title: 'Agile Development',
      desc: 'Two-week sprints with continuous delivery.'
    },
    {
      num: '04',
      title: 'Launch, Support & Scale',
      desc: 'Production deployment and dedicated support.'
    }
  ]

  const skills = [
    { name: 'Full-Stack Web Development', percentage: 96 },
    { name: 'Enterprise Resource Planning', percentage: 94 },
    { name: 'Cloud & SaaS Architecture', percentage: 91 }
  ]

  const chips = ['React', 'Node.js', 'Python', 'PostgreSQL', 'Flutter', 'AWS']

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

    const sObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.querySelectorAll('.sk-fi').forEach(b => {
          b.style.width = b.dataset.w + '%'
        })
        sObs.unobserve(e.target)
      })
    }, { threshold: 0.25 })

    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    document.querySelectorAll('.tpanel').forEach(el => sObs.observe(el))

    return () => {
      obs.disconnect()
      sObs.disconnect()
    }
  }, [])

  return (
    <section className="sec how-sec" id="process">
      <div className="how-i">
        <div>
          <div className="tag reveal">
            <span className="tdot"></span>Our Process
          </div>
          <h2 className="sh2 reveal">
            How We Turn Your<br/>
            <span className="si">Vision</span> Into Reality
          </h2>
          <p className="sp reveal">A battle-tested framework refined across 500+ projects.</p>

          <div className="steps">
            {steps.map((step, idx) => (
              <div key={idx} className="step reveal">
                <div className="snum">{step.num}</div>
                <div>
                  <div className="stitle">{step.title}</div>
                  <div className="sdesc2">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <div className="tpanel">
            <div className="tpt">Technical Expertise</div>
            <div className="skills">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="sk-top">
                    <span className="sk-n">{skill.name}</span>
                    <span className="sk-p">{skill.percentage}%</span>
                  </div>
                  <div className="sk-tr">
                    <div className="sk-fi" data-w={skill.percentage}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="chips">
              {chips.map((chip, idx) => (
                <span key={idx} className="chip">{chip}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
