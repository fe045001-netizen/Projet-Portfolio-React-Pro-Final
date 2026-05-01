import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Ferme le menu à chaque changement de page
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Bloque le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "";

  return (
    <>
      <nav className="container nav">
        {/* LOGO */}
        <NavLink to="/" className="logo">
          Fatima<span style={{ color: "var(--violet)" }}>.</span>Ez
        </NavLink>

        {/* DESKTOP LINKS */}
        <div className="nav-right">
          <div className="links">
            <NavLink to="/projects"      className={navClass}>Projets</NavLink>
            <NavLink to="/experience"    className={navClass}>Parcours</NavLink>
            <NavLink to="/education"     className={navClass}>Formations</NavLink>
            <NavLink to="/certifications" className={navClass}>Certifications</NavLink>
            <NavLink to="/contact"       className={navClass}>Contact</NavLink>
          </div>
          <ThemeToggle />
        </div>

        {/* HAMBURGER BUTTON (mobile only) */}
        <button
          className={`burger${menuOpen ? " burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}>
        <NavLink to="/projects"       className={navClass} onClick={() => setMenuOpen(false)}>Projets</NavLink>
        <NavLink to="/experience"     className={navClass} onClick={() => setMenuOpen(false)}>Parcours</NavLink>
        <NavLink to="/education"      className={navClass} onClick={() => setMenuOpen(false)}>Formations</NavLink>
        <NavLink to="/certifications" className={navClass} onClick={() => setMenuOpen(false)}>Certifications</NavLink>
        <NavLink to="/contact"        className={navClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        <div className="mobile-theme-toggle">
          <ThemeToggle />
        </div>
      </div>

      {/* OVERLAY (ferme le menu en cliquant dehors) */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <Outlet />
    </>
  );
}
