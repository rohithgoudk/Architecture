import { useEffect } from "react";
import "./Home.css";
import img1 from "../../assets/A7.webp";
import img2 from "../../assets/A13.webp";
import img3 from "../../assets/A14.webp";
import service1 from "../../assets/A6.webp";
import service2 from "../../assets/A5.webp";
import service3 from "../../assets/A4.webp";
import service4 from "../../assets/A3.webp";
import service5 from "../../assets/A8.webp";
import service6 from "../../assets/A9.webp";

function Home() {
  /* ── Scroll-reveal observer ── */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll("[data-reveal], [data-stagger]")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <main>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <span>Luxury Architecture & Interior Design</span>

          <h1>
            Designing Spaces <br />
            That <em>Define</em> Modern <br />
            Living
          </h1>

          <p>
            We create iconic residential, commercial, and hospitality
            environments through innovative architecture, elegant
            interiors, and sustainable design.
          </p>

        </div>

        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
          
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section">
        <div className="about-image" data-reveal="left" />

        <div className="about-content" data-reveal="right">
          <span>About Our Studio</span>

          <h2>Creating Architectural Excellence Since 2010</h2>

          <p>
            Our multidisciplinary design studio delivers world-class
            architecture, urban planning, and interior design solutions
            that blend creativity, functionality, and sustainability.
          </p>

          <p>
            Every project is carefully crafted to provide timeless
            aesthetics while maximising user experience.
          </p>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="projects-section">
        <div className="section-title" data-reveal>
          <span>Portfolio</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid" data-stagger>
          <div className="project-card">
            <img src={img1} alt="Luxury Villa" />
            <div className="project-card-overlay">
              <p className="card-meta">Residential · Dubai</p>
              <h3>Luxury Villa</h3>
            </div>
          </div>

          <div className="project-card">
            <img src={img2} alt="Corporate Headquarters" />
            <div className="project-card-overlay">
              <p className="card-meta">Commercial · Singapore</p>
              <h3>Corporate Headquarters</h3>
            </div>
          </div>

          <div className="project-card">
            <img src={img3} alt="Urban Residence" />
            <div className="project-card-overlay">
              <p className="card-meta">Mixed-Use · London</p>
              <h3>Urban Residence</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section">
        <div className="section-title" data-reveal>
          <span>Services</span>
          <h2>What We Offer</h2>
        </div>

        <div className="services-grid" data-stagger>
          <div className="service-card">
            <img src={service1} alt="Architecture Design" />
            <div className="service-content">
              <h3>Architecture Design</h3>
              <p>Innovative architectural solutions tailored to your vision and lifestyle.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={service2} alt="Interior Design" />
            <div className="service-content">
              <h3>Interior Design</h3>
              <p>Elegant interiors combining beauty, comfort, and functionality.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={service3} alt="Urban Planning" />
            <div className="service-content">
              <h3>Urban Planning</h3>
              <p>Sustainable development strategies for future-ready communities.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={service4} alt="Landscape Design" />
            <div className="service-content">
              <h3>Landscape Design</h3>
              <p>Harmonious outdoor environments that complement architecture.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={service5} alt="3D Visualization" />
            <div className="service-content">
              <h3>3D Visualisation</h3>
              <p>
                High-quality architectural renderings and immersive visual
                presentations that bring concepts to life before construction begins.
              </p>
            </div>
          </div>

          <div className="service-card">
            <img src={service6} alt="Project Management" />
            <div className="service-content">
              <h3>Project Management</h3>
              <p>
                Comprehensive project coordination ensuring timely delivery,
                budget control, and flawless execution from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section">
        <div className="section-title" data-reveal>
          <span>Our Process</span>
          <h2>From Concept to Completion</h2>
        </div>

        <div className="process-grid" data-stagger>
          <div className="process-card">
            <div className="process-number">01</div>
            <p>Discovery & Consultation</p>
            <span className="process-desc">We listen deeply to understand your vision, requirements, and context.</span>
          </div>

          <div className="process-card">
            <div className="process-number">02</div>
            <p>Concept Development</p>
            <span className="process-desc">Initial sketches and spatial concepts shaped around your brief.</span>
          </div>

          <div className="process-card">
            <div className="process-number">03</div>
            <p>Detailed Planning</p>
            <span className="process-desc">Technical drawings, material selection, and full design documentation.</span>
          </div>

          <div className="process-card">
            <div className="process-number">04</div>
            <p>Project Execution</p>
            <span className="process-desc">On-site coordination and quality oversight through to handover.</span>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (NEW) ── */}
      <section className="testimonials-section">
        <div className="section-title" data-reveal>
          <span>Client Stories</span>
          <h2>What Our Clients Say</h2>
        </div>

        <div className="testimonials-grid" data-stagger>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "Working with this studio transformed our home into a living
              work of art. Every detail was considered — the space feels both
              grand and deeply personal."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">SR</div>
              <div className="testimonial-info">
                <h4>Sophia Reynolds</h4>
                <p>Private Residence · London</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-quote">
              "The team delivered a headquarters that communicates our brand
              better than any marketing campaign could. Clients arrive and
              immediately understand who we are."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">MK</div>
              <div className="testimonial-info">
                <h4>Marcus Klein</h4>
                <p>CEO · Meridian Group</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-quote">
              "What sets this studio apart is their ability to honour the
              surrounding landscape while creating something entirely new.
              A rare skill."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">AL</div>
              <div className="testimonial-info">
                <h4>Amara Levi</h4>
                <p>Developer · Azura Properties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* ── DESIGN PHILOSOPHY (NEW) ── */}
      <section className="philosophy-section">
        <div className="philosophy-left" data-reveal="left">
          <span>Our Philosophy</span>

          <h2>
            Beauty is not an <em>addition</em> —<br />
            it is the intention.
          </h2>

          <p>
            We believe that great architecture is not an act of imposition
            but of listening — to the land, the culture, the light, and
            the people who will inhabit the space every day.
          </p>

          <p>
            Every material we specify, every proportion we refine, every
            threshold we design carries this principle: that a building
            should make life feel more fully lived.
          </p>
        </div>

        <div className="philosophy-right" data-stagger>
          <div className="philosophy-value">
            <span className="philosophy-value-icon">I</span>
            <h4>Integrity</h4>
            <p>We build exactly what we promise, from sketch to structure.</p>
          </div>

          <div className="philosophy-value">
            <span className="philosophy-value-icon">C</span>
            <h4>Craft</h4>
            <p>Detail is never an afterthought — it is the point.</p>
          </div>

          <div className="philosophy-value">
            <span className="philosophy-value-icon">S</span>
            <h4>Sustainability</h4>
            <p>Every design accounts for its footprint across generations.</p>
          </div>

          <div className="philosophy-value">
            <span className="philosophy-value-icon">E</span>
            <h4>Empathy</h4>
            <p>We design for human beings, in all their richness and complexity.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <h2 data-reveal>
          Ready to Build Something<br />Extraordinary?
        </h2>

        <p data-reveal>Let's transform your vision into a landmark project.</p>

        <button data-reveal>Schedule Consultation</button>
      </section>

    </main>
  );
}

export default Home;