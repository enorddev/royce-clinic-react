import { useEffect, useState } from 'react';

const BOOKING_URL = 'https://roycesclinic.setmore.com/team/r2a9e6b27dbadf994497f876a1ed692ff4bb76e51';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-inner">
          <a href="#home" className="nav-logo">
            <img src="/images/royce_logo-removebg-preview.png" alt="Royce Clinic" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="nav-cta">
            Book Now
          </a>
          <button
            className="hamburger"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} onClick={(e) => { if (e.target.classList.contains('mobile-menu')) close(); }}>
        <ul>
          <li><a href="#services" onClick={close}>Services</a></li>
          <li><a href="#team" onClick={close}>Team</a></li>
          <li><a href="#reviews" onClick={close}>Reviews</a></li>
          <li><a href="#contact" onClick={close}>Contact</a></li>
          <li><a href="#book" className="mobile-cta" onClick={close}>Book Now</a></li>
        </ul>
      </div>
    </>
  );
}
