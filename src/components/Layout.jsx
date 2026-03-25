import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../content/siteContent";

export function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const primaryLinks = navLinks.slice(0, 4);
  const overflowLinks = navLinks.slice(4);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-row">
          <Link to="/" className="brand" aria-label="Nonstop Automation Home">
            <span className="brand-mark">N</span>
            <span>Nonstop Automation</span>
          </Link>

          <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
            {open ? "Close" : "Menu"}
          </button>

          <nav className="desktop-nav" onMouseLeave={() => setMoreOpen(false)}>
            {primaryLinks.map((link) => (
              <NavLink key={link.label} to={link.to} className="nav-link">
                {link.label}
              </NavLink>
            ))}
            <div className="more-wrap">
              <button
                type="button"
                className="more-button"
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
              >
                More
              </button>
              {moreOpen && (
                <div className="more-menu">
                  {overflowLinks.map((link) => (
                    <NavLink
                      key={link.label}
                      to={link.to}
                      className="more-link"
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <Link to="/" className="cta-button small">Book Demo</Link>
        </div>

        {open && (
          <nav className="mobile-drawer">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.to} className="mobile-link" onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <Link to="/" className="cta-button" onClick={() => setOpen(false)}>Book Demo</Link>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Ready to stop missing bookings?</h3>
            <p>See how service teams grow without hiring sprees.</p>
            <div className="footer-cta-row">
              <Link to="/" className="cta-button">Book a demo</Link>
              <Link to="/" className="ghost-button">Try the AI</Link>
            </div>
          </div>
          <div>
            <p className="footer-heading">Company</p>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <p className="footer-heading">Social</p>
            <div className="footer-links">
              <a href="https://instagram.com/nonstopautomation" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://facebook.com/funnelpros.ai" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/company/nonstopautomation/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://youtube.com/@nonstopautomation" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
        </div>
        <p className="copyright">© 2026 Nonstop Automation</p>
      </footer>
    </div>
  );
}