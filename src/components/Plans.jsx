import Reveal from './Reveal';
import { plans } from '../data/services';

export default function Plans() {
  return (
    <section className="plans-section">
      <div className="container">
        <Reveal className="section-header light">
          <span className="section-eyebrow">Invest In Your Locs</span>
          <h2 className="section-title">Care Plans</h2>
          <p className="section-desc">Annual packages for consistent, premium locs care at unbeatable value.</p>
        </Reveal>
      </div>
      <div className="plans-grid">
        {plans.map((plan, i) => (
          <Reveal
            className={`plan-card${plan.featured ? ' plan-featured' : ''}`}
            delay={i * 0.08}
            key={plan.name}
          >
            <div className={`plan-badge${plan.badgeClass ? ` ${plan.badgeClass}` : ''}`}>{plan.badge}</div>
            <h3 className="plan-name">{plan.name}</h3>
            <div className="plan-price">{plan.price}<span>/yr</span></div>
            <p className="plan-save">{plan.save}</p>
            <ul className="plan-features">
              {plan.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a href="#book" className={`btn-plan${plan.featured ? ' featured' : ''}`}>Get Started</a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
