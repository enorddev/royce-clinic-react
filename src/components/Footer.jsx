export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/images/royce_logo-removebg-preview.png" alt="Royce Clinic" className="footer-logo" />
          <p>Locs Specialist &amp; Holistic Hair Wellness<br />Greater Montreal, Quebec</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#book">Book Now</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><a href="tel:+14385263276">(438) 526-3276</a></p>
          <p><a href="mailto:roycesclinic@gmail.com">roycesclinic@gmail.com</a></p>
          <p>3916 rue St-Denis, Montreal, Quebec</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} Royce Clinic. All rights reserved. | Locs Specialist &amp; Holistic Hair Wellness</p>
      </div>
    </footer>
  );
}
