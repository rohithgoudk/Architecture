import { useEffect, useState } from "react";
import "./Services.css";

import service1 from "../../assets/A6.webp";
import service2 from "../../assets/A5.webp";
import service3 from "../../assets/A4.webp";
import service4 from "../../assets/A3.webp";
import service5 from "../../assets/A8.webp";
import service6 from "../../assets/A9.webp";

/* ── Data ── */
const SERVICES = [
  {
    id: 1,
    num: "01",
    title: "Architecture Design",
    short: "Form that serves life.",
    description:
      "From first sketch to completed structure — we design buildings that respond to their context, their climate, and the people who will inhabit them every day. Every line drawn carries intention.",
    deliverables: ["Concept Design", "Planning Applications", "Technical Drawings", "Site Oversight"],
    img: service1,
  },
  {
    id: 2,
    num: "02",
    title: "Interior Design",
    short: "Spaces that feel inevitable.",
    description:
      "We approach interiors as the continuation of architecture — not decoration applied after the fact, but a spatial experience considered from the very beginning. Material, light, proportion.",
    deliverables: ["Space Planning", "Material Specification", "Furniture Curation", "Lighting Design"],
    img: service2,
  },
  {
    id: 3,
    num: "03",
    title: "Urban Planning",
    short: "Cities shaped for people.",
    description:
      "We work at the scale of neighbourhoods and districts, developing frameworks that balance density, movement, ecology, and community — sustainable strategies for places that will outlast us.",
    deliverables: ["Masterplanning", "Urban Studies", "Community Engagement", "Policy Advisory"],
    img: service3,
  },
  {
    id: 4,
    num: "04",
    title: "Landscape Design",
    short: "Ground that belongs to the building.",
    description:
      "The boundary between interior and exterior is one of the most consequential design decisions. We design landscapes that extend the architecture outward into the terrain.",
    deliverables: ["Site Analysis", "Planting Design", "Hardscape", "Water Features"],
    img: service4,
  },
  {
    id: 5,
    num: "05",
    title: "3D Visualisation",
    short: "The project, before it exists.",
    description:
      "High-resolution renderings and immersive walkthroughs that communicate the full spatial and material quality of a design — tools for decision-making, not just presentation.",
    deliverables: ["Still Renders", "Animation", "VR Walkthroughs", "Material Studies"],
    img: service5,
  },
  {
    id: 6,
    num: "06",
    title: "Project Management",
    short: "Delivery without compromise.",
    description:
      "We remain present from the first consultation through to handover, coordinating every consultant, contractor, and supplier so that the finished building matches the designed one.",
    deliverables: ["Programme Management", "Cost Control", "Contractor Coordination", "Quality Assurance"],
    img: service6,
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Brief & Discovery",
    desc: "We begin by listening — to you, the site, the brief, and the constraints that will ultimately shape the work.",
  },
  {
    num: "02",
    title: "Design Development",
    desc: "Iterative exploration of form, material, and space, tested rigorously against the brief at every stage.",
  },
  {
    num: "03",
    title: "Technical Resolution",
    desc: "Full documentation, specification, and coordination with engineers and specialists.",
  },
  {
    num: "04",
    title: "Delivery & Handover",
    desc: "On-site presence through construction to ensure the built outcome matches the designed intention.",
  },
];

const PILLARS = [
  { icon: "P", label: "Precision", desc: "Every dimension, material, and joint is considered before it is committed." },
  { icon: "R", label: "Rigour", desc: "We do not simplify problems — we work through them until we find the best answer." },
  { icon: "I", label: "Integrity", desc: "The same standard of care is applied to every project, regardless of scale." },
  { icon: "D", label: "Dialogue", desc: "Our best work emerges from genuine collaboration with clients and consultants." },
];

/* ── Component ── */
function Services() {
  const [activeService, setActiveService] = useState(null);

  /* Scroll-reveal — identical contract to Home.jsx */
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
      { threshold: 0.1 }
    );
    document
      .querySelectorAll("[data-reveal], [data-stagger]")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="svc-main">

      {/* ══════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════ */}
      <section className="svc-hero">
        <div className="svc-hero-bg" />
        <div className="svc-hero-overlay" />

        <div className="svc-hero-content">
          

          <h1>
            Six Disciplines.<br />
            One <em>Standard</em><br />
            of Excellence.
          </h1>

          <p>
            From a single interior to an entire urban district — our services
            span the full breadth of the built environment, delivered with
            the same rigour at every scale.
          </p>

          <div className="svc-hero-pills">
            {SERVICES.map((s) => (
              <span key={s.id} className="svc-hero-pill">
                {s.title}
              </span>
            ))}
          </div>
        </div>

        <div className="svc-hero-scroll" aria-hidden="true">
          <div className="svc-hero-scroll-line" />
          
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — SERVICE LIST (accordion-style)
      ══════════════════════════════════════ */}
      <section className="svc-list-section">
        <div className="svc-section-header" data-reveal>
          <span className="svc-eyebrow">Our Services</span>
          <h2>A Complete Design<br />Practice</h2>
        </div>

        <div className="svc-list" data-stagger>
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className={`svc-row${activeService === s.id ? " svc-row--open" : ""}`}
              onClick={() => setActiveService(activeService === s.id ? null : s.id)}
            >
              {/* Row header — always visible */}
              <div className="svc-row-head">
                <span className="svc-row-num">{s.num}</span>
                <h3 className="svc-row-title">{s.title}</h3>
                <p className="svc-row-short">{s.short}</p>
                <div className="svc-row-toggle" aria-hidden="true">
                  <span />
                  <span />
                </div>
              </div>

              {/* Expanded panel */}
              <div className="svc-row-panel">
                <div className="svc-row-panel-inner">
                  <div className="svc-row-img-wrap">
                    <img src={s.img} alt={s.title} loading="lazy" />
                  </div>
                  <div className="svc-row-body">
                    <p className="svc-row-desc">{s.description}</p>
                    <div className="svc-row-deliverables">
                      <span className="svc-row-deliv-label">Deliverables</span>
                      <ul>
                        {s.deliverables.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — SERVICE CARDS GRID
      ══════════════════════════════════════ */}
      <section className="svc-grid-section">
        <div className="svc-section-header svc-section-header--light" data-reveal>
          <span className="svc-eyebrow svc-eyebrow--dark">At a Glance</span>
          <h2 className="svc-grid-h2">Every Service,<br />Considered in Full</h2>
        </div>

        <div className="svc-cards" data-stagger>
          {SERVICES.map((s) => (
            <div key={s.id} className="svc-card">
              <div className="svc-card-img-wrap">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div className="svc-card-body">
                <span className="svc-card-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <div className="svc-card-line" />
                <ul className="svc-card-tags">
                  {s.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — PROCESS + PILLARS
      ══════════════════════════════════════ */}
      <section className="svc-process-section">

        {/* Process steps */}
        <div className="svc-process-block">
          <div className="svc-section-header" data-reveal>
            <span className="svc-eyebrow">How We Work</span>
            <h2>From Brief<br />to Built</h2>
          </div>

          <div className="svc-process-grid" data-stagger>
            {PROCESS.map((p) => (
              <div key={p.num} className="svc-process-card">
                <div className="svc-process-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="svc-process-accent-line" />
              </div>
            ))}
          </div>
        </div>

        {/* Studio pillars */}
        <div className="svc-pillars-block">
          <div className="svc-section-header" data-reveal>
            <span className="svc-eyebrow">Our Principles</span>
            <h2>What Guides<br />Every Decision</h2>
          </div>

          <div className="svc-pillars-grid" data-stagger>
            {PILLARS.map((p) => (
              <div key={p.label} className="svc-pillar">
                <span className="svc-pillar-icon">{p.icon}</span>
                <h4>{p.label}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className="svc-cta">
        <h2 data-reveal>
          Let's Build<br />
          <em>Something Lasting</em>
        </h2>
        <p data-reveal>
          Tell us about your project and we'll outline the services
          that fit your brief, timeline, and ambition.
        </p>
        <button data-reveal>Begin a Conversation</button>
      </section>

    </main>
  );
}

export default Services;