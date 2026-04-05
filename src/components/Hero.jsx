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
        <div className="hero-content">
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
            <div className="kpi-item">
              <div className="kv">500<span>+</span></div>
              <div className="kl">Projects Done</div>
            </div>
            <div className="ksep" aria-hidden="true"></div>
            <div className="kpi-item">
              <div className="kv">98<span>%</span></div>
              <div className="kl">Client Retention</div>
            </div>
            <div className="ksep" aria-hidden="true"></div>
            <div className="kpi-item">
              <div className="kv">12<span>+</span></div>
              <div className="kl">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="hvisual reveal">
          <div className="dash">
            <div className="dtop">
              <div className="dtl">
                <div className="dlsm">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="dappn">Enterprise Dashboard</div>
              </div>
              <div className="ddots">
                <span className="dd1"></span>
                <span className="dd2"></span>
                <span className="dd3"></span>
              </div>
            </div>
            <div className="dtabs">
              <button className="dtab on">Overview</button>
              <button className="dtab">Analytics</button>
              <button className="dtab">Reports</button>
            </div>
            <div className="dbody">
              <div className="dmetrics">
                <div className="dmc">
                  <div className="dml">Revenue</div>
                  <div className="dmv">₹48.2L</div>
                  <div className="dmd ug">↑ 18.4%</div>
                </div>
                <div className="dmc">
                  <div className="dml">Active Users</div>
                  <div className="dmv">12,480</div>
                  <div className="dmd ub">↑ 6.1%</div>
                </div>
                <div className="dmc">
                  <div className="dml">Efficiency</div>
                  <div className="dmv">94%</div>
                  <div className="dmd ug">↑ 12.2%</div>
                </div>
              </div>
              <div className="dchart">
                <div className="dch"><span className="dct">Weekly Performance</span><span className="dcb">+24%</span></div>
                <div className="sbars">
                  <div className="sb md" style={{height:'42%'}}></div>
                  <div className="sb hi" style={{height:'60%'}}></div>
                  <div className="sb md" style={{height:'36%'}}></div>
                  <div className="sb hi" style={{height:'80%'}}></div>
                  <div className="sb md" style={{height:'52%'}}></div>
                  <div className="sb hi" style={{height:'96%'}}></div>
                  <div className="sb md" style={{height:'70%'}}></div>
                </div>
              </div>
              <div className="dlist">
                <div className="drow">
                  <div className="drl">
                    <div className="drico" style={{background:'#DBEAFE'}}>📦</div>
                    <div>
                      <div className="drn">Supply Chain Sync</div>
                      <div className="drs"><span className="sdot sg"></span>Active · 1,240 nodes</div>
                    </div>
                  </div>
                  <div className="drv">₹12.4L</div>
                </div>
                <div className="drow">
                  <div className="drl">
                    <div className="drico" style={{background:'#FEF3C7'}}>🔨</div>
                    <div>
                      <div className="drn">Auction Portal</div>
                      <div className="drs"><span className="sdot sg"></span>Live · 48 lots</div>
                    </div>
                  </div>
                  <div className="drv">₹8.7L</div>
                </div>
              </div>
            </div>
          </div>
          <div className="fb fb1">
            <span className="fbi">🚀</span>
            <div>
              <div className="fbt">v4.1 Deployed</div>
              <div className="fbs">Zero downtime release</div>
            </div>
          </div>
          <div className="fb fb2">
            <span className="fbi">🛡️</span>
            <div>
              <div className="fbt">99.9% Uptime</div>
              <div className="fbs">Enterprise SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
