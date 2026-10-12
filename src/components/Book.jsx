import Reveal from './Reveal';

export default function Book() {
  return (
    <section className="book-section" id="book">
      <div className="book-inner">
        <Reveal className="book-content" as="div">
          <span className="section-eyebrow" style={{ color: 'var(--gold)' }}>Ready to Begin?</span>
          <h2 className="book-title">Book Your Appointment</h2>
          <p className="book-desc">
            New clients require a consultation. All bookings require a $50 deposit to confirm your spot.
          </p>
          <div className="book-info">
            <div className="book-detail">
              <span className="book-icon location">📍</span>
              <span>3916 rue St-Denis, Montreal, Quebec</span>
            </div>
            <div className="book-detail">
              <span className="book-icon phone">📞</span>
              <a href="tel:+14385263276">(438) 526-3276</a>
            </div>
            <div className="book-detail">
              <span className="book-icon">✉️</span>
              <a href="mailto:roycesclinic@gmail.com">roycesclinic@gmail.com</a>
            </div>
          </div>
          <a href="https://roycesclinic.setmore.com/" target="_blank" rel="noreferrer" className="btn-book">
            Book Now →
          </a>
        </Reveal>
        <div className="book-decoration">
          <div className="deco-circle deco-1"></div>
          <div className="deco-circle deco-2"></div>
          <div className="deco-circle deco-3"></div>
          <img src="/images/logo.png" alt="Royce Clinic" className="book-logo" />
        </div>
      </div>
    </section>
  );
}
