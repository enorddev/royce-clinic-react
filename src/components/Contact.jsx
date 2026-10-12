import Reveal from './Reveal';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <Reveal className="contact-left">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-items">
              <div className="contact-item">
                <div className="ci-icon">📞</div>
                <div>
                  <span className="ci-label">Phone</span>
                  <a href="tel:+14385263276" className="ci-value">(438) 526-3276</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon">✉️</div>
                <div>
                  <span className="ci-label">Email</span>
                  <a href="mailto:roycesclinic@gmail.com" className="ci-value">roycesclinic@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon">📍</div>
                <div>
                  <span className="ci-label">Location</span>
                  <span className="ci-value">3916 rue St-Denis, Montreal, Quebec</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon">🕒</div>
                <div>
                  <span className="ci-label">Hours</span>
                  <span className="ci-value">By Appointment Only</span>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://instagram.com/royceclinic" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://tiktok.com/@royceclinic" target="_blank" rel="noreferrer" className="social-link" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-right" delay={0.1}>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5!2d-73.5874!3d45.5231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3916+Rue+Saint-Denis%2C+Montr%C3%A9al%2C+QC!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Royce Clinic Location"
              ></iframe>
            </div>
            <div className="pay-methods">
              <span className="pay-label">We Accept</span>
              <div className="pay-icons">
                {['VISA', 'Mastercard', 'Apple Pay', 'Google Pay', 'Affirm', 'Klarna', 'Afterpay'].map((p) => (
                  <span className="pay-badge" key={p}>{p}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
