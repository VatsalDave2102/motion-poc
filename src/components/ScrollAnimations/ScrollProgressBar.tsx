import React from "react";
import { motion, useScroll } from "motion/react";

/**
 * ScrollProgressBar Component
 *
 * A fixed progress indicator that shows scroll progress across the entire page.
 * Features:
 * - Fixed positioning at the top of the viewport
 * - Horizontal scaling based on scroll progress (0 to 100%)
 * - High z-index to stay above other content
 * - Smooth scaling animation with origin-left transform
 *
 * @example
 * <ScrollProgressBar />
 */
const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-blue-500 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;
