import { Fragment } from 'react';

const items = [
  { icon: '◈', label: 'Starter Locs' },
  { icon: '✦', label: 'Regular Maintenance' },
  { icon: '◉', label: 'Bespoke Extensions' },
  { icon: '✿', label: 'Scalp Treatments' },
  { icon: '⟁', label: 'Locs Restoration' },
];

export default function AboutStrip() {
  return (
    <section className="about-strip">
      <div className="strip-inner">
        {items.map((item, i) => (
          <Fragment key={item.label}>
            {i > 0 && <div className="strip-sep">·</div>}
            <div className="strip-item">
              <span className="strip-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
