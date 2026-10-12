import Reveal from './Reveal';
import { services } from '../data/services';

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-desc">
            Professional locs care tailored to your unique hair journey, from first loc to full restoration.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal className="service-card" delay={(i % 3) * 0.06} key={service.name}>
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-name">{service.name}</h3>
              <ul className="service-items">
                {service.items.map((item) => (
                  <li className="service-item" key={item.name}>
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="tax-disclaimer">
          <small><sup>*</sup> All prices are subject to applicable taxes.</small>
        </div>

        <Reveal className="policy-card">
          <div className="policy-icon">📋</div>
          <div className="policy-content">
            <h3>Booking Policy</h3>
            <ul>
              <li>$50 deposit required to book (non-refundable, deductible from total price)</li>
              <li>50% of price for starter locs, extensions &amp; reattaching</li>
              <li>After 30 minutes late, appointment is automatically cancelled</li>
              <li>Deposit e-mail: <a href="mailto:roycesclinic@gmail.com">roycesclinic@gmail.com</a></li>
              <li>Private / Salon setting available</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
