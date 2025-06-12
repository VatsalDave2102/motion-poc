import React from "react";
import { motion } from "motion/react";

/**
 * FinalSection Component
 *
 * Concluding section with dramatic scale and fade animations.
 * Features:
 * - Large title with scale animation (0.5 to 1)
 * - Subtitle with upward slide and fade-in
 * - Staggered timing between title and subtitle
 * - Dark purple background for dramatic contrast
 * - Custom easing for smooth, professional feel
 * - One-time animations for performance optimization
 *
 * @example
 * <FinalSection />
 */
const FinalSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-900 text-white flex items-center justify-center">
      <div className="text-center">
        <motion.h2
          className="text-5xl font-bold mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          The End
        </motion.h2>
        <motion.p
          className="text-xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Scroll animations make websites feel alive! 🎉
        </motion.p>
      </div>
    </div>
  );
};

export default FinalSection;
