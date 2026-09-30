import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Adds the "scrolled" class (badge tucks down) once the page moves
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Escape closes the mobile dropdown
  useEffect(() => {
    if (!menuOpen) return;

    const handleKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="main-navbar" aria-label="Main navigation">

        {/* =====================================================
            LOGO
        ===================================================== */}
        <NavLink
          to="/"
          end
          className="navbar-logo-link"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Twinkling Stars Daycare Preschool"
            className="navbar-logo"
          />
        </NavLink>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}
        <button
          type="button"
          className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* =====================================================
            NAVIGATION MENU
        ===================================================== */}
        <div className={`navbar-menu ${menuOpen ? "menu-open" : ""}`}>

          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/programs"
            onClick={closeMenu}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            PROGRAMS
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            GALLERY
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            GET IN TOUCH
          </NavLink>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;