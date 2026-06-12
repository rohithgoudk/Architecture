import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/stacklyimg1.webp";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Close menu on route change ── */
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>

      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Studio Logo" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className={`nav${menuOpen ? " active" : ""}`}>
        <Link to="/" className={isActive("/")} onClick={closeMenu}>
          Home
        </Link>

        <Link to="/projects" className={isActive("/projects")} onClick={closeMenu}>
          Projects
        </Link>

        <Link to="/services" className={isActive("/services")} onClick={closeMenu}>
          Services
        </Link>

        <Link to="/about" className={isActive("/about")} onClick={closeMenu}>
          About
        </Link>

        <Link to="/login" className={isActive("/about")} onClick={closeMenu}>
          Login
        </Link>
        

        <Link to="/contact" className={`nav-cta ${isActive("/contact")}`} onClick={closeMenu}>
          <span>Contact</span>
        </Link>
      </nav>

      {/* Mobile Toggle */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </header>
  );
}

export default Header;