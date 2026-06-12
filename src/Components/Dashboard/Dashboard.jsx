import { useState } from "react";
import "./Dashboard.css";
import logo from "../../assets/stacklyimg1.webp"

const projectsData = [
  { id: 1, name: "Horizon Tower", client: "Apex Realty", type: "Commercial", status: "In Progress", progress: 72, deadline: "Aug 2025", budget: "$4.2M", lead: "A. Chen" },
  { id: 2, name: "Verdant Residences", client: "GreenHome Co.", type: "Residential", status: "Design Phase", progress: 38, deadline: "Jan 2026", budget: "$1.8M", lead: "M. Patel" },
  { id: 3, name: "Civic Arts Hub", client: "City Council", type: "Public", status: "Completed", progress: 100, deadline: "Mar 2025", budget: "$6.5M", lead: "S. Okafor" },
  { id: 4, name: "Lakeshore Pavilion", client: "Meridian Group", type: "Mixed-Use", status: "In Progress", progress: 55, deadline: "Nov 2025", budget: "$2.9M", lead: "L. Torres" },
  { id: 5, name: "The Foundry Lofts", client: "Urban Nest", type: "Residential", status: "Review", progress: 89, deadline: "Jun 2025", budget: "$3.1M", lead: "A. Chen" },
];

const teamMembers = [
  { name: "Aiko Chen", role: "Principal Architect", projects: 4, avatar: "AC", status: "active" },
  { name: "Marcus Patel", role: "Senior Designer", projects: 3, avatar: "MP", status: "active" },
  { name: "Sofia Okafor", role: "Project Manager", projects: 5, avatar: "SO", status: "away" },
  { name: "Luis Torres", role: "Structural Lead", projects: 2, avatar: "LT", status: "active" },
];

const recentActivity = [
  { icon: "📐", text: "Horizon Tower — Floor plan v7 uploaded", time: "2h ago", type: "upload" },
  { icon: "💬", text: "Client review scheduled for Verdant Residences", time: "4h ago", type: "meeting" },
  { icon: "✅", text: "Civic Arts Hub — Final sign-off received", time: "Yesterday", type: "complete" },
  { icon: "⚠️", text: "Lakeshore Pavilion — Permit delay noted", time: "Yesterday", type: "alert" },
  { icon: "📋", text: "The Foundry Lofts — Inspection report filed", time: "2d ago", type: "report" },
];

const navItems = [
  { icon: "▦", label: "Dashboard", id: "dashboard" },
  { icon: "⬡", label: "Projects", id: "projects" },
  { icon: "👥", label: "Team", id: "team" },
  { icon: "📐", label: "Blueprints", id: "blueprints" },
  { icon: "📊", label: "Analytics", id: "analytics" },
  { icon: "🗓", label: "Schedule", id: "schedule" },
  { icon: "💰", label: "Budgets", id: "budgets" },
  { icon: "📁", label: "Documents", id: "documents" },
  { icon: "⚙️", label: "Settings", id: "settings" },
];

const statusColors = {
  "In Progress": "status-progress",
  "Design Phase": "status-design",
  "Completed": "status-complete",
  "Review": "status-review",
};

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard");

  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-root">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <div className="brand">
            {/* ── Logo Image Placeholder ── Replace src with your logo path */}
            <div className="logo-placeholder">
              <img
                src={logo}
                alt="Logo"
                className="brand-logo"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="logo-fallback">◈</div>
            </div>
           
          </div>
          <button className="close-btn" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            ✕
          </button>
        </div>

        <div className="sidebar-section-label">MAIN MENU</div>
        <nav className="sidebar-nav">
          {navItems.slice(0, 6).map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? "nav-active" : ""}`}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {item.id === "projects" && <span className="nav-badge">5</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-section-label">MANAGEMENT</div>
        <nav className="sidebar-nav">
          {navItems.slice(6).map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? "nav-active" : ""}`}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

          <button className="logout-full-btn" onClick={handleLogout}>
            <span className="logout-icon">↪</span>
            Logout
          </button>
        
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div className="topbar-left">
            <button className="hamburger" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
            <div className="page-title">
              <h1>Dashboard</h1>
              <p>Welcome back, James — here's your studio overview.</p>
            </div>
          </div>
          <div className="topbar-right">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input placeholder="Search projects, files…" />
            </div>
            <button className="icon-btn notif-btn" aria-label="Notifications">
              🔔
              <span className="notif-dot" />
            </button>
            <div className="topbar-avatar">JD</div>
          </div>
        </header>

        <div className="content-area">

          {/* Stats Row */}
          <section className="stats-grid">
            <div className="stat-card stat-accent">
              <div className="stat-top">
                <span className="stat-icon">⬡</span>
                <span className="stat-delta up">+2 this month</span>
              </div>
              <div className="stat-value">18</div>
              <div className="stat-label">Active Projects</div>
              <div className="stat-bar"><div className="stat-bar-fill" style={{width:"72%"}} /></div>
            </div>
            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-icon">👥</span>
                <span className="stat-delta up">+1 this week</span>
              </div>
              <div className="stat-value">24</div>
              <div className="stat-label">Team Members</div>
              <div className="stat-bar"><div className="stat-bar-fill" style={{width:"55%"}} /></div>
            </div>
            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-icon">💰</span>
                <span className="stat-delta up">On track</span>
              </div>
              <div className="stat-value">$18.5M</div>
              <div className="stat-label">Total Budget Managed</div>
              <div className="stat-bar"><div className="stat-bar-fill" style={{width:"88%"}} /></div>
            </div>
            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-icon">✅</span>
                <span className="stat-delta up">+3 this year</span>
              </div>
              <div className="stat-value">47</div>
              <div className="stat-label">Projects Delivered</div>
              <div className="stat-bar"><div className="stat-bar-fill" style={{width:"90%"}} /></div>
            </div>
          </section>

          {/* Projects + Activity Row */}
          <section className="mid-grid">
            {/* Projects Table */}
            <div className="card projects-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Active Projects</h2>
                  <p className="card-sub">Current portfolio overview</p>
                </div>
                <button className="btn-outline">View All</button>
              </div>
              <div className="table-wrapper">
                <table className="projects-table">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Progress</th>
                      <th>Deadline</th>
                      <th>Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectsData.map((p) => (
                      <tr key={p.id}>
                        <td>
                          <div className="proj-name">{p.name}</div>
                          <div className="proj-client">{p.client} · {p.lead}</div>
                        </td>
                        <td><span className="type-tag">{p.type}</span></td>
                        <td><span className={`status-badge ${statusColors[p.status]}`}>{p.status}</span></td>
                        <td>
                          <div className="progress-wrap">
                            <div className="progress-bar">
                              <div className="progress-fill" style={{width:`${p.progress}%`}} />
                            </div>
                            <span className="progress-pct">{p.progress}%</span>
                          </div>
                        </td>
                        <td className="deadline-col">{p.deadline}</td>
                        <td className="budget-col">{p.budget}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="card activity-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Recent Activity</h2>
                  <p className="card-sub">Studio updates</p>
                </div>
              </div>
              <ul className="activity-list">
                {recentActivity.map((a, i) => (
                  <li key={i} className={`activity-item act-${a.type}`}>
                    <span className="act-icon">{a.icon}</span>
                    <div className="act-body">
                      <p className="act-text">{a.text}</p>
                      <span className="act-time">{a.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Team + Milestones Row */}
          <section className="bottom-grid">
            {/* Team */}
            <div className="card team-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Team</h2>
                  <p className="card-sub">Studio members</p>
                </div>
                <button className="btn-outline">Manage</button>
              </div>
              <ul className="team-list">
                {teamMembers.map((m, i) => (
                  <li key={i} className="team-item">
                    <div className="member-avatar">
                      {m.avatar}
                      <span className={`online-dot dot-${m.status}`} />
                    </div>
                    <div className="member-info">
                      <div className="member-name">{m.name}</div>
                      <div className="member-role">{m.role}</div>
                    </div>
                    <div className="member-projects">
                      <span className="proj-count">{m.projects}</span>
                      <span className="proj-label">projects</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Milestone Timeline */}
            <div className="card milestone-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Upcoming Milestones</h2>
                  <p className="card-sub">Next 60 days</p>
                </div>
              </div>
              <ul className="milestone-list">
                {[
                  { project: "The Foundry Lofts", event: "Final Inspection", date: "Jun 28", done: false, urgent: true },
                  { project: "Horizon Tower", event: "Structural Review", date: "Jul 5", done: false, urgent: false },
                  { project: "Verdant Residences", event: "Client Presentation", date: "Jul 14", done: false, urgent: false },
                  { project: "Lakeshore Pavilion", event: "Permit Approval", date: "Jul 22", done: false, urgent: false },
                  { project: "Civic Arts Hub", event: "Handover Ceremony", date: "Aug 1", done: true, urgent: false },
                ].map((m, i) => (
                  <li key={i} className={`milestone-item ${m.done ? "ms-done" : ""} ${m.urgent ? "ms-urgent" : ""}`}>
                    <div className="ms-date">
                      <span>{m.date.split(" ")[0]}</span>
                      <span>{m.date.split(" ")[1]}</span>
                    </div>
                    <div className="ms-line"><div className="ms-dot" /></div>
                    <div className="ms-body">
                      <div className="ms-event">{m.event}</div>
                      <div className="ms-project">{m.project}</div>
                    </div>
                    {m.urgent && <span className="ms-tag">Urgent</span>}
                    {m.done && <span className="ms-tag ms-done-tag">Done</span>}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats / Donut-style */}
            <div className="card insights-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Project Mix</h2>
                  <p className="card-sub">By typology</p>
                </div>
              </div>
              <div className="donut-chart">
                <svg viewBox="0 0 120 120" className="donut-svg">
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#E8EDF5" strokeWidth="16"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#C8A97E" strokeWidth="16"
                    strokeDasharray="90 212" strokeDashoffset="0" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#1A1A2E" strokeWidth="16"
                    strokeDasharray="60 212" strokeDashoffset="-90" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#7B9ED9" strokeWidth="16"
                    strokeDasharray="40 212" strokeDashoffset="-150" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#B5CCBA" strokeWidth="16"
                    strokeDasharray="22 212" strokeDashoffset="-190" strokeLinecap="round"/>
                  <text x="60" y="56" textAnchor="middle" className="donut-num">18</text>
                  <text x="60" y="68" textAnchor="middle" className="donut-label">Projects</text>
                </svg>
              </div>
              <ul className="legend-list">
                {[
                  { color: "#C8A97E", label: "Commercial", count: 7 },
                  { color: "#1A1A2E", label: "Residential", count: 5 },
                  { color: "#7B9ED9", label: "Mixed-Use", count: 4 },
                  { color: "#B5CCBA", label: "Public", count: 2 },
                ].map((l, i) => (
                  <li key={i} className="legend-item">
                    <span className="legend-dot" style={{background: l.color}} />
                    <span className="legend-label">{l.label}</span>
                    <span className="legend-count">{l.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}