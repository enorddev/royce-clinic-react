import Reveal from './Reveal';

export default function Team() {
  return (
    <section className="team-section" id="team">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">Behind The Craft</span>
          <h2 className="section-title">Meet The Team</h2>
        </Reveal>
        <div className="team-grid">
          <Reveal className="team-card">
            <div className="team-avatar">
              <div className="avatar-ring"></div>
              <div className="avatar-initials">
                <img
                  src="/images/jonaelle_avatar.jpeg"
                  alt="Royce"
                  className="logo-img"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
            <h3 className="team-name">Royce</h3>
            <p className="team-title">Founder &amp; Locs Specialist</p>
            <p className="team-bio">
              Passionate about holistic hair wellness and the art of locs. Royce brings expertise,
              precision, and care to every appointment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
