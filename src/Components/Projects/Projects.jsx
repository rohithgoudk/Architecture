import { useEffect, useState } from "react";
import "./Projects.css";

/* ── Project data ── */
const ALL_PROJECTS = [
  {
    id: 1,
    category: "Residential",
    location: "Dubai, UAE",
    year: "2024",
    title: "Zenith Private Villa",
    description:
      "A sprawling desert residence where raw travertine walls dissolve into floor-to-ceiling glass, framing the dunes as living art. Every threshold was designed to slow time.",
    area: "1,840 m²",
    duration: "26 months",
    img: "/src/assets/A7.webp",
  },
  {
    id: 2,
    category: "Commercial",
    location: "Singapore",
    year: "2023",
    title: "Meridian Headquarters",
    description:
      "A corporate campus conceived as a vertical village — interconnected sky gardens, cascading atria, and a structural language borrowed from the region's tropical canopy.",
    area: "12,400 m²",
    duration: "38 months",
    img: "/src/assets/A13.webp",
  },
  {
    id: 3,
    category: "Mixed-Use",
    location: "London, UK",
    year: "2023",
    title: "Aldgate Quarter",
    description:
      "A mixed-use urban block that stitches together a fractured street edge — retail at grade, residences above, and a public courtyard that belongs to the neighbourhood.",
    area: "8,200 m²",
    duration: "44 months",
    img: "/src/assets/A14.webp",
  },
  {
    id: 4,
    category: "Hospitality",
    location: "Amalfi, Italy",
    year: "2022",
    title: "Terrazza Sul Mare",
    description:
      "A clifftop boutique hotel carved into the limestone, each suite oriented to capture a different arc of the Tyrrhenian horizon. Stone, sea, light — nothing more.",
    area: "3,600 m²",
    duration: "31 months",
    img: "/src/assets/A6.webp",
  },
  {
    id: 5,
    category: "Residential",
    location: "Tokyo, Japan",
    year: "2022",
    title: "Shoto House",
    description:
      "A narrow urban residence resolved through sectional thinking — six staggered levels of living that draw light deep into the plan through a central void.",
    area: "420 m²",
    duration: "18 months",
    img: "/src/assets/A5.webp",
  },
  {
    id: 6,
    category: "Cultural",
    location: "Copenhagen, Denmark",
    year: "2021",
    title: "Nordic Arts Pavilion",
    description:
      "A temporary exhibition structure built from locally sourced CLT, demonstrating that impermanence and beauty are not opposites. Fully disassembled and reused.",
    area: "920 m²",
    duration: "8 months",
    img: "/src/assets/A4.webp",
  },
];

const CATEGORIES = ["All", "Residential", "Commercial", "Mixed-Use", "Hospitality", "Cultural"];

const STATS = [
  { number: "140+", label: "Projects Completed" },
  { number: "28", label: "Countries" },
  { number: "14", label: "Years of Practice" },
  { number: "32", label: "Design Awards" },
];

const DISCIPLINES = [
  {
    num: "01",
    title: "Site & Context Analysis",
    desc: "We begin by reading the land — its orientation, topography, materiality, and social history — before a single line is drawn.",
  },
  {
    num: "02",
    title: "Spatial Narrative",
    desc: "Each project is given a guiding idea, a sentence that every design decision can be tested against throughout the process.",
  },
  {
    num: "03",
    title: "Material Resolution",
    desc: "We specify with precision: sourcing, texture, ageing behaviour, and the relationship between materials at their junctions.",
  },
  {
    num: "04",
    title: "Craft & Delivery",
    desc: "On-site presence from foundation to final fit-out. We do not hand over drawings and disappear.",
  },
];

/* ── Component ── */
function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS);

  /* Scroll-reveal observer — mirrors Home.jsx */
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
  }, [visibleProjects]);

  /* Filter logic */
  const handleFilter = (cat) => {
    setActiveFilter(cat);
    setVisibleProjects(
      cat === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.category === cat)
    );
  };

  return (
    <main className="proj-main">

      {/* ══════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════ */}
      <section className="proj-hero">
        <div className="proj-hero-bg" />
        <div className="proj-hero-overlay" />

        <div className="proj-hero-content">
          

          <h1>
            Every Project is a<br />
            <em>Conversation</em> with<br />
            Its Place
          </h1>

          <p>
            Fourteen years of architecture, interior design, and urban
            planning across six continents — each project shaped by its
            landscape, culture, and the lives it will shelter.
          </p>

          <div className="proj-hero-meta">
            <div className="proj-hero-meta-item">
              <strong>140+</strong>
              <span>Completed Works</span>
            </div>
            <div className="proj-hero-meta-divider" />
            <div className="proj-hero-meta-item">
              <strong>28</strong>
              <span>Countries</span>
            </div>
            <div className="proj-hero-meta-divider" />
            <div className="proj-hero-meta-item">
              <strong>32</strong>
              <span>Design Awards</span>
            </div>
          </div>
        </div>

        <div className="proj-hero-scroll" aria-hidden="true">
          <div className="proj-hero-scroll-line" />
         
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — FILTER + PROJECTS GRID
      ══════════════════════════════════════ */}
      <section className="proj-grid-section">

        <div className="proj-filter-bar" data-reveal>
          <span className="proj-filter-label">Filter by type</span>
          <div className="proj-filter-pills">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`proj-filter-pill${activeFilter === cat ? " active" : ""}`}
                onClick={() => handleFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="proj-mosaic" data-stagger>
          {visibleProjects.map((project, i) => (
            <article
              key={project.id}
              className={`proj-card ${i === 0 || i === 3 ? "proj-card--wide" : ""}`}
            >
              <div className="proj-card-img-wrap">
                <img src={project.img} alt={project.title} loading="lazy" />
              </div>

              <div className="proj-card-overlay">
                <div className="proj-card-overlay-top">
                  <span className="proj-card-cat">{project.category}</span>
                  <span className="proj-card-year">{project.year}</span>
                </div>
                <div className="proj-card-overlay-bottom">
                  <p className="proj-card-location">{project.location}</p>
                  <h3>{project.title}</h3>
                  <p className="proj-card-desc">{project.description}</p>
                  <div className="proj-card-specs">
                    <span>{project.area}</span>
                    <span className="proj-card-spec-dot">·</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — STATS BAND + APPROACH
      ══════════════════════════════════════ */}
      <section className="proj-stats-section">

        <div className="proj-stats-strip" data-stagger>
          {STATS.map((s) => (
            <div key={s.label} className="proj-stat">
              <strong>{s.number}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="proj-approach" data-reveal>
          <div className="proj-approach-left">
            <span className="proj-eyebrow">Our Approach</span>
            <h2>
              Architecture is not a<br />
              product. It is a <em>practice</em>.
            </h2>
          </div>
          <div className="proj-approach-right">
            <p>
              We do not start from a signature style and impose it on
              each site. We start from the specific — the slope of the
              land, the quality of the light at noon in December, the
              patterns of movement that already exist — and let those
              realities guide the form.
            </p>
            <p>
              The result is work that could only exist in one place,
              for one client, at one moment. That specificity is the
              only reliable source of genuine originality.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — DISCIPLINES / PROCESS
      ══════════════════════════════════════ */}
      <section className="proj-disciplines-section">
        <div className="proj-section-title" data-reveal>
          <span className="proj-eyebrow">How We Work</span>
          <h2>Four Disciplines.<br />One Standard of Care.</h2>
        </div>

        <div className="proj-disciplines-grid" data-stagger>
          {DISCIPLINES.map((d) => (
            <div key={d.num} className="proj-discipline-card">
              <div className="proj-discipline-num">{d.num}</div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
              <div className="proj-discipline-line" />
            </div>
          ))}
        </div>

        <blockquote className="proj-quote" data-reveal>
          <p>
            "We are not in the business of building buildings. We are in
            the business of making places where human life can be lived
            more fully."
          </p>
          <cite>— Studio Principal</cite>
        </blockquote>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className="proj-cta-section">
        <h2 data-reveal>
          Begin a<br />
          <em>New Project</em>
        </h2>
        <p data-reveal>
          We take on a limited number of commissions each year to
          ensure every client receives our full attention.
        </p>
        <button data-reveal>Schedule a Consultation</button>
      </section>

    </main>
  );
}

export default Projects;