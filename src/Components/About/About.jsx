import { useEffect } from "react";
import "./About.css";
import aboutHero from "../../assets/A14.webp";
import storyImg from "../../assets/A13.webp";
import teamImg1 from "../../assets/A6.webp";
import teamImg2 from "../../assets/A5.webp";
import teamImg3 from "../../assets/A4.webp";
import teamImg4 from "../../assets/A8.webp";

function About() {
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

      {/* ── 1. ABOUT HERO ── */}
      <section className="about-hero">
        <div
          className="about-hero-bg"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          
          <h1>
            Crafting Spaces <br />
            With <em>Purpose</em> & <br />
            Precision
          </h1>
          <p>
            For over a decade, we've been shaping environments that
            balance beauty, function, and a deep respect for the people
            and places they serve.
          </p>
        </div>
      </section>

      {/* ── 2. OUR STORY ── */}
      <section className="story-section">
        <div className="story-content" data-reveal="left">
          <span>Our Story</span>
          <h2>A Studio Built on Vision and Detail</h2>

          <p>
            Founded in 2010, our studio began with a simple belief: that
            architecture should be deeply personal, responsive to its
            surroundings, and built to last generations.
          </p>

          <p>
            From a small team working out of a converted warehouse, we've
            grown into a multidisciplinary practice spanning architecture,
            interiors, urban planning, and landscape design — without ever
            losing the intimacy of a studio that knows every project by name.
          </p>

          <div className="story-stats" data-stagger>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>120+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>18</h3>
              <p>Design Awards</p>
            </div>
            <div className="stat-item">
              <h3>9</h3>
              <p>Countries Served</p>
            </div>
          </div>
        </div>

        <div
          className="story-image"
          data-reveal="right"
          style={{ backgroundImage: `url(${storyImg})` }}
        />
      </section>

      {/* ── 3. MISSION & VALUES ── */}
      <section className="mission-section">
        <div className="section-title" data-reveal>
          <span>Our Mission</span>
          <h2>Designing With Intention</h2>
        </div>

        <div className="mission-grid" data-stagger>
          <div className="mission-card">
            <span className="mission-number">01</span>
            <h3>Thoughtful Design</h3>
            <p>
              Every project begins with listening — to the site, the
              client, and the community it will serve.
            </p>
          </div>

          <div className="mission-card">
            <span className="mission-number">02</span>
            <h3>Sustainable Practice</h3>
            <p>
              We design with the future in mind, prioritising materials
              and methods that minimise environmental impact.
            </p>
          </div>

          <div className="mission-card">
            <span className="mission-number">03</span>
            <h3>Collaborative Process</h3>
            <p>
              Our best work emerges from close partnership with clients,
              engineers, and craftspeople at every stage.
            </p>
          </div>

          <div className="mission-card">
            <span className="mission-number">04</span>
            <h3>Timeless Quality</h3>
            <p>
              We design spaces meant to age gracefully — aesthetically
              and structurally — for decades to come.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. TEAM ── */}
      <section className="team-section">
        <div className="section-title" data-reveal>
          <span>Meet The Team</span>
          <h2>The People Behind The Practice</h2>
        </div>

        <div className="team-grid" data-stagger>
          <div className="team-card">
            <div className="team-image">
              <img src={teamImg1} alt="Founder & Principal Architect" />
            </div>
            <div className="team-info">
              <h3>Eleanor Voss</h3>
              <p className="team-role">Founder & Principal Architect</p>
              <p className="team-bio">
                With over 20 years of experience, Eleanor leads the
                studio's creative direction and major commissions.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img src={teamImg2} alt="Director of Interior Design" />
            </div>
            <div className="team-info">
              <h3>Daniel Cho</h3>
              <p className="team-role">Director of Interior Design</p>
              <p className="team-bio">
                Daniel shapes interior environments that feel both
                considered and effortless, blending texture and light.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img src={teamImg3} alt="Head of Urban Planning" />
            </div>
            <div className="team-info">
              <h3>Priya Nair</h3>
              <p className="team-role">Head of Urban Planning</p>
              <p className="team-bio">
                Priya focuses on sustainable masterplans that strengthen
                community connection and long-term resilience.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img src={teamImg4} alt="Lead Project Manager" />
            </div>
            <div className="team-info">
              <h3>Marcus Webb</h3>
              <p className="team-role">Lead Project Manager</p>
              <p className="team-bio">
                Marcus ensures every project moves from concept to
                completion on time, on budget, and to the highest standard.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;