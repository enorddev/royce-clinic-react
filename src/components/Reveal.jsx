import { motion } from 'framer-motion';

// Shared scroll-reveal wrapper — mirrors the original site's IntersectionObserver
// fade-up effect (see .reveal / .reveal.visible in the old theme CSS) using
// Framer Motion's whileInView instead.
export default function Reveal({ children, delay = 0, className, as = 'div', ...props }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
