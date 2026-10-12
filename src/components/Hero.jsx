import { motion } from "framer-motion";

const BOOKING_URL = "https://roycesclinic.setmore.com/";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-lines"></div>
      </div>
      <div className="hero-content">
        <motion.div className="hero-badge" {...fadeUp(0)}>
          <span className="badge-dot"></span>
          Greater Montreal&apos;s Premier Locs Studio
        </motion.div>

        <motion.h1 className="hero-title" {...fadeUp(0.1)}>
          <span className="title-thin">
            R<span className="eye">𓂀</span>yce
          </span>
          <span className="title-bold">Clinic</span>
        </motion.h1>

        <motion.p className="hero-sub" {...fadeUp(0.2)}>
          Locs Specialist &amp; Holistic Hair Wellness
        </motion.p>

        <motion.p className="hero-desc" {...fadeUp(0.3)}>
          Bespoke locs care rooted in expertise, artistry, and deep respect for
          your hair journey.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.4)}>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Book Appointment
          </a>
          <a href="#services" className="btn-ghost">
            View Services
          </a>
        </motion.div>

        <motion.div className="hero-stats" {...fadeUp(0.5)}>
          <div className="stat">
            <span className="stat-num">5.0</span>
            <span className="stat-label">★★★★★ Rating</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">28+</span>
            <span className="stat-label">Verified Reviews</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">258+</span>
            <span className="stat-label">Posts &amp; Works</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
}
