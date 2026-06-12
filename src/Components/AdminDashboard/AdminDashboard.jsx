import { useState } from "react";
import "./AdminDashboard.css";
import logo from "../../assets/stacklyimg1.webp"


const usersData = [
  { id: 1, name: "Aiko Chen", email: "a.chen@archivex.io", role: "Principal Architect", status: "Active", lastLogin: "Today, 9:14 AM", projects: 4, avatar: "AC" },
  { id: 2, name: "Marcus Patel", email: "m.patel@archivex.io", role: "Senior Designer", status: "Active", lastLogin: "Today, 8:02 AM", projects: 3, avatar: "MP" },
  { id: 3, name: "Sofia Okafor", email: "s.okafor@archivex.io", role: "Project Manager", status: "Away", lastLogin: "Yesterday", projects: 5, avatar: "SO" },
  { id: 4, name: "Luis Torres", email: "l.torres@archivex.io", role: "Structural Lead", status: "Active", lastLogin: "Today, 11:30 AM", projects: 2, avatar: "LT" },
  { id: 5, name: "Priya Nair", email: "p.nair@archivex.io", role: "Junior Designer", status: "Inactive", lastLogin: "3 days ago", projects: 1, avatar: "PN" },
];

const auditLog = [
  { icon: "🔐", text: "Role changed — Marcus Patel promoted to Senior Designer", time: "1h ago", type: "role" },
  { icon: "👤", text: "New user invited — Priya Nair (Junior Designer)", time: "3h ago", type: "user" },
  { icon: "🗑️", text: "Project deleted — Archive Draft 2023 removed by Admin", time: "5h ago", type: "delete" },
  { icon: "⚠️", text: "Failed login attempt — unknown IP 203.0.113.45", time: "Yesterday", type: "alert" },
  { icon: "📦", text: "Storage limit increased to 2TB by Super Admin", time: "2d ago", type: "system" },
];

const systemHealth = [
  { label: "API Uptime", value: "99.97%", status: "healthy" },
  { label: "Storage Used", value: "1.4 / 2 TB", status: "warning" },
  { label: "DB Response", value: "42 ms", status: "healthy" },
  { label: "Active Sessions", value: "18", status: "healthy" },
];

const navItems = [
  { icon: "▦", label: "Overview", id: "overview" },
  { icon: "👥", label: "Users", id: "users" },
  { icon: "🔐", label: "Permissions", id: "permissions" },
  { icon: "📋", label: "Audit Log", id: "audit" },
  { icon: "📊", label: "Analytics", id: "analytics" },
  { icon: "🗓", label: "Activity", id: "activity" },
  { icon: "💳", label: "Billing", id: "billing" },
  { icon: "📁", label: "Storage", id: "storage" },
  { icon: "⚙️", label: "Settings", id: "settings" },
];

const roleColors = {
  "Principal Architect": "role-principal",
  "Senior Designer":    "role-senior",
  "Project Manager":    "role-pm",
  "Structural Lead":    "role-lead",
  "Junior Designer":    "role-junior",
};

const statusColors = {
  "Active":   "ustatus-active",
  "Away":     "ustatus-away",
  "Inactive": "ustatus-inactive",
};

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("overview");

  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="admin-root">
      {sidebarOpen && (
        <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="admin-sidebar-header">
          <div className="admin-brand">
            {/* ── Logo Image Placeholder ── Replace src with your logo path */}
            <div className="admin-logo-placeholder">
              <img
                src={logo}
                alt="Logo"
                className="admin-brand-logo"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="admin-logo-fallback">◈</div>
            </div>
           
          </div>
          <button className="admin-close-btn" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            ✕
          </button>
        </div>

        <div className="admin-section-label">CONSOLE</div>
        <nav className="admin-nav">
          {navItems.slice(0, 6).map((item) => (
            <button
              key={item.id}
              className={`admin-nav-item ${activeNav === item.id ? "admin-nav-active" : ""}`}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              <span className="admin-nav-label">{item.label}</span>
              {item.id === "users" && <span className="admin-nav-badge">24</span>}
              {item.id === "audit" && <span className="admin-nav-badge alert-badge">3</span>}
            </button>
          ))}
        </nav>

        <div className="admin-section-label">SYSTEM</div>
        <nav className="admin-nav">
          {navItems.slice(6).map((item) => (
            <button
              key={item.id}
              className={`admin-nav-item ${activeNav === item.id ? "admin-nav-active" : ""}`}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              <span className="admin-nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* System Health Mini Panel */}
        <div className="admin-health-panel">
          <div className="health-panel-title">System Health</div>
          {systemHealth.map((h, i) => (
            <div key={i} className="health-row">
              <span className="health-label">{h.label}</span>
              <span className={`health-value hv-${h.status}`}>{h.value}</span>
            </div>
          ))}
        </div>

          <button className="admin-logout-btn" onClick={handleLogout}>
            <span className="admin-logout-icon">↪</span>
            Logout
          </button>
        
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button className="admin-hamburger" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
            <div className="admin-page-title">
              <h1>Admin Overview</h1>
              <p>Platform control — full system visibility.</p>
            </div>
          </div>
          <div className="admin-topbar-right">
            <div className="admin-search-box">
              <span className="admin-search-icon">🔍</span>
              <input placeholder="Search users, logs, settings…" />
            </div>
            <button className="admin-icon-btn" aria-label="Alerts">
              🔔
              <span className="admin-notif-dot" />
            </button>
            <div className="admin-role-chip">Super Admin</div>
            <div className="admin-topbar-avatar">JD</div>
          </div>
        </header>

        <div className="admin-content">

          {/* Stats Row */}
          <section className="admin-stats-grid">
            <div className="admin-stat-card admin-stat-accent">
              <div className="admin-stat-top">
                <span className="admin-stat-icon">👥</span>
                <span className="admin-stat-delta up">+3 this month</span>
              </div>
              <div className="admin-stat-value">24</div>
              <div className="admin-stat-label">Total Users</div>
              <div className="admin-stat-bar"><div className="admin-stat-fill" style={{width:"68%"}} /></div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-top">
                <span className="admin-stat-icon">✅</span>
                <span className="admin-stat-delta up">18 active now</span>
              </div>
              <div className="admin-stat-value">21</div>
              <div className="admin-stat-label">Active Accounts</div>
              <div className="admin-stat-bar"><div className="admin-stat-fill" style={{width:"87%"}} /></div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-top">
                <span className="admin-stat-icon">💳</span>
                <span className="admin-stat-delta up">On track</span>
              </div>
              <div className="admin-stat-value">$6.2K</div>
              <div className="admin-stat-label">Monthly Revenue</div>
              <div className="admin-stat-bar"><div className="admin-stat-fill" style={{width:"75%"}} /></div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-top">
                <span className="admin-stat-icon">⚠️</span>
                <span className="admin-stat-delta down">Needs review</span>
              </div>
              <div className="admin-stat-value">3</div>
              <div className="admin-stat-label">Open Alerts</div>
              <div className="admin-stat-bar"><div className="admin-stat-fill alert-fill" style={{width:"20%"}} /></div>
            </div>
          </section>

          {/* Users Table + Audit Log */}
          <section className="admin-mid-grid">
            {/* Users Table */}
            <div className="admin-card admin-users-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">User Management</h2>
                  <p className="admin-card-sub">All platform accounts</p>
                </div>
                <button className="admin-btn-outline">+ Invite User</button>
              </div>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Last Login</th>
                      <th>Projects</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData.map((u) => (
                      <tr key={u.id}>
                        <td>
                          <div className="admin-user-row">
                            <div className="admin-table-avatar">{u.avatar}</div>
                            <div>
                              <div className="admin-uname">{u.name}</div>
                              <div className="admin-uemail">{u.email}</div>
                            </div>
                          </div>
                        </td>
                        <td><span className={`admin-role-badge ${roleColors[u.role]}`}>{u.role}</span></td>
                        <td><span className={`admin-ustatus ${statusColors[u.status]}`}>{u.status}</span></td>
                        <td className="admin-login-col">{u.lastLogin}</td>
                        <td className="admin-proj-col">{u.projects}</td>
                        <td>
                          <div className="admin-actions">
                            <button className="admin-action-btn" title="Edit">✏️</button>
                            <button className="admin-action-btn danger" title="Remove">🗑️</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Audit Log */}
            <div className="admin-card admin-audit-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Audit Log</h2>
                  <p className="admin-card-sub">Recent admin actions</p>
                </div>
              </div>
              <ul className="admin-audit-list">
                {auditLog.map((a, i) => (
                  <li key={i} className={`admin-audit-item audit-${a.type}`}>
                    <span className="admin-audit-icon">{a.icon}</span>
                    <div className="admin-audit-body">
                      <p className="admin-audit-text">{a.text}</p>
                      <span className="admin-audit-time">{a.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Bottom Row */}
          <section className="admin-bottom-grid">

            {/* Permissions */}
            <div className="admin-card admin-perms-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Role Permissions</h2>
                  <p className="admin-card-sub">Access matrix</p>
                </div>
                <button className="admin-btn-outline">Edit Roles</button>
              </div>
              <div className="admin-perms-body">
                {[
                  { role: "Super Admin", create: true, edit: true, delete: true, billing: true },
                  { role: "Principal Architect", create: true, edit: true, delete: false, billing: false },
                  { role: "Project Manager", create: true, edit: true, delete: false, billing: false },
                  { role: "Senior Designer", create: true, edit: false, delete: false, billing: false },
                  { role: "Junior Designer", create: false, edit: false, delete: false, billing: false },
                ].map((r, i) => (
                  <div key={i} className="admin-perm-row">
                    <span className="admin-perm-role">{r.role}</span>
                    <div className="admin-perm-dots">
                      <span className={`perm-dot ${r.create ? "perm-on" : "perm-off"}`} title="Create">C</span>
                      <span className={`perm-dot ${r.edit ? "perm-on" : "perm-off"}`} title="Edit">E</span>
                      <span className={`perm-dot ${r.delete ? "perm-on" : "perm-off"}`} title="Delete">D</span>
                      <span className={`perm-dot ${r.billing ? "perm-on" : "perm-off"}`} title="Billing">$</span>
                    </div>
                  </div>
                ))}
                <div className="admin-perm-legend">
                  <span className="perm-dot perm-on" /> Allowed &nbsp;
                  <span className="perm-dot perm-off" /> Restricted
                </div>
              </div>
            </div>

            {/* Billing / Revenue */}
            <div className="admin-card admin-billing-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Billing Summary</h2>
                  <p className="admin-card-sub">Current cycle</p>
                </div>
              </div>
              <div className="admin-billing-body">
                {[
                  { label: "Plan", value: "Enterprise" },
                  { label: "Seats Used", value: "21 / 30" },
                  { label: "Next Renewal", value: "Jul 1, 2026" },
                  { label: "Monthly Total", value: "$6,200" },
                  { label: "Storage", value: "1.4 / 2 TB" },
                  { label: "Overage", value: "None" },
                ].map((b, i) => (
                  <div key={i} className="admin-billing-row">
                    <span className="admin-billing-label">{b.label}</span>
                    <span className="admin-billing-value">{b.value}</span>
                  </div>
                ))}
                <button className="admin-billing-cta">Manage Subscription</button>
              </div>
            </div>

            {/* Platform Mix Donut */}
            <div className="admin-card admin-mix-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">User Roles</h2>
                  <p className="admin-card-sub">By permission level</p>
                </div>
              </div>
              <div className="admin-donut-chart">
                <svg viewBox="0 0 120 120" className="admin-donut-svg">
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#E8EDF5" strokeWidth="16"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#C8A97E" strokeWidth="16"
                    strokeDasharray="70 212" strokeDashoffset="0" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#1A1A2E" strokeWidth="16"
                    strokeDasharray="50 212" strokeDashoffset="-70" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#7B9ED9" strokeWidth="16"
                    strokeDasharray="45 212" strokeDashoffset="-120" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#B5CCBA" strokeWidth="16"
                    strokeDasharray="30 212" strokeDashoffset="-165" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#E8CFC0" strokeWidth="16"
                    strokeDasharray="17 212" strokeDashoffset="-195" strokeLinecap="round"/>
                  <text x="60" y="56" textAnchor="middle" className="admin-donut-num">24</text>
                  <text x="60" y="68" textAnchor="middle" className="admin-donut-label">Users</text>
                </svg>
              </div>
              <ul className="admin-legend-list">
                {[
                  { color: "#C8A97E", label: "Sr. Designer", count: 7 },
                  { color: "#1A1A2E", label: "Proj. Manager", count: 6 },
                  { color: "#7B9ED9", label: "Architect", count: 5 },
                  { color: "#B5CCBA", label: "Structural Lead", count: 4 },
                  { color: "#E8CFC0", label: "Jr. Designer", count: 2 },
                ].map((l, i) => (
                  <li key={i} className="admin-legend-item">
                    <span className="admin-legend-dot" style={{background: l.color}} />
                    <span className="admin-legend-label">{l.label}</span>
                    <span className="admin-legend-count">{l.count}</span>
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