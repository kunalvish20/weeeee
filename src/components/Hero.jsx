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
            <span className="pill-chip">New</span>
            <span className="pill-txt">Trusted by 500+ enterprises across India</span>
          </div>
          
          <h1 className="hero-h1">
            Enterprise Software<br/>
            Built to <span className="si">Scale</span><br/>
            &amp; Perform
          </h1>
          
          <p className="hero-sub">
            balizana delivers custom software solutions — from intelligent inventory management systems and live auction portals to full enterprise applications — engineered to grow your business.
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
        
        <div className="hvisual" aria-label="Dashboard preview">
          <div className="dash">
            <div className="dtop">
              <div className="dtl">
                <div className="dlsm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-label="Lightning bolt icon">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <span className="dappn">balizana Enterprise Dashboard</span>
              </div>
              <div className="ddots" aria-hidden="true">
                <span className="dd1"></span>
                <span className="dd2"></span>
                <span className="dd3"></span>
              </div>
            </div>
            
            <div className="dtabs" role="tablist">
              <div className="dtab on" role="tab" aria-selected="true">Overview</div>
              <div className="dtab" role="tab" aria-selected="false">Inventory</div>
              <div className="dtab" role="tab" aria-selected="false">Auctions</div>
              <div className="dtab" role="tab" aria-selected="false">Reports</div>
            </div>
            
            <div className="dbody">
              <div className="dmetrics">
                <div className="dmc">
                  <div className="dml">Revenue</div>
                  <div className="dmv">₹48.2L</div>
                  <div className="dmd ug">↑ 18.4%</div>
                </div>
                <div className="dmc">
                  <div className="dml">Stock SKUs</div>
                  <div className="dmv">12,480</div>
                  <div className="dmd ub">↑ 6.1%</div>
                </div>
                <div className="dmc">
                  <div className="dml">Live Bids</div>
                  <div className="dmv">342</div>
                  <div className="dmd ug">↑ 31.2%</div>
                </div>
              </div>
              
              <div className="dchart">
                <div className="dch">
                  <span className="dct">Weekly Sales Performance</span>
                  <span className="dcb">This Week +24%</span>
                </div>
                <div className="sbars" role="img" aria-label="Weekly sales chart showing 7 bars representing daily performance">
                  <div className="sb md" style={{height:'42%'}} aria-hidden="true"></div>
                  <div className="sb hi" style={{height:'60%'}} aria-hidden="true"></div>
                  <div className="sb md" style={{height:'36%'}} aria-hidden="true"></div>
                  <div className="sb hi" style={{height:'80%'}} aria-hidden="true"></div>
                  <div className="sb md" style={{height:'52%'}} aria-hidden="true"></div>
                  <div className="sb hi" style={{height:'96%'}} aria-hidden="true"></div>
                  <div className="sb md" style={{height:'70%'}} aria-hidden="true"></div>
                </div>
              </div>
              
              <div className="dlist">
                <div className="drow">
                  <div className="drl">
                    <div className="drico" style={{background:'#DBEAFE'}} aria-hidden="true">📦</div>
                    <div>
                      <div className="drn">Inventory Module</div>
                      <div className="drs"><span className="sdot sg" aria-hidden="true"></span>Live · 1,240 SKUs</div>
                    </div>
                  </div>
                  <div className="drv">₹12.4L</div>
                </div>
                <div className="drow">
                  <div className="drl">
                    <div className="drico" style={{background:'#FEF3C7'}} aria-hidden="true">🔨</div>
                    <div>
                      <div className="drn">Auction Portal</div>
                      <div className="drs"><span className="sdot sg" aria-hidden="true"></span>Live · 48 active lots</div>
                    </div>
                  </div>
                  <div className="drv">₹8.7L</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fb fb1" aria-label="Version 4.1 deployed notification">
            <span className="fbi" aria-hidden="true">🚀</span>
            <div>
              <div className="fbt">v4.1 Deployed!</div>
              <div className="fbs">Zero downtime release</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
