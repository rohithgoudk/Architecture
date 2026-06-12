import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/stacklyimg1.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand */}

        <div className="footer-brand">
          <Link to="/" className="footer-logo-placeholder">
            <img src={logo} alt="Stackly Logo" />
          </Link>

          <p className="footer-tagline">
            Creating timeless architectural masterpieces
            through innovation, elegance, and sustainability.
          </p>

          <div className="social-icons">

            <Link to="/facebook" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </Link>

            <Link to="/twitter" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Link>

            <Link to="/instagram" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </Link>

            <Link to="/linkedin" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM7.119 20.452H3.554V9h3.565v11.452z"/>
              </svg>
            </Link>

          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-col">
          <h4>
            <span className="footer-col-index">01</span>
            Quick Links
          </h4>

          <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}

        <div className="footer-col">
          <h4>
            <span className="footer-col-index">02</span>
            Contact
          </h4>

          <ul className="footer-contact">
            <li>
              <span className="footer-contact-label">
                Email
              </span>

              <a href="mailto:stackly@gmail.com">
                stackly@gmail.com
              </a>
            </li>

            <li>
              <span className="footer-contact-label">
                Phone
              </span>

              <a href="tel:+919876543210">
                +91 9876543210
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}

      <div className="footer-bottom">

        <span className="copyright">
          © 2026 Stackly. All Rights Reserved.
        </span>

        <div className="footer-legal">
          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <span className="footer-divider">
            /
          </span>

          <Link to="/terms-of-service">
            Terms of Service
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;