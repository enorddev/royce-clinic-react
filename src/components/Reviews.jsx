import Reveal from './Reveal';
import { reviews } from '../data/services';

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">Client Love</span>
          <h2 className="section-title">Reviews</h2>
          <div className="rating-summary">
            <span className="big-rating">5.0</span>
            <div className="rating-stars">★★★★★</div>
            <span className="rating-count">28 verified reviews</span>
          </div>
        </Reveal>

        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <Reveal className="review-card" delay={(i % 3) * 0.06} key={`${review.name}-${i}`}>
              <div className="review-header">
                <div className="review-avatar">{review.initial}</div>
                <div className="review-meta">
                  <span className="reviewer-name">{review.name}</span>
                  <span className="review-time">{review.time}</span>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;{review.text}&quot;</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
