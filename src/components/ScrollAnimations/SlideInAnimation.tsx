import React from "react";
import { motion } from "motion/react";

/**
 * SlideInAnimation Component
 *
 * Demonstrates horizontal slide-in animation with spring physics.
 * Features:
 * - Element slides in from the left (-200px to 0)
 * - Simultaneous opacity fade-in (0 to 1)
 * - Spring transition with custom stiffness for natural movement
 * - One-time animation triggered when entering viewport
 * - Bold typography with responsive text sizing
 *
 * @example
 * <SlideInAnimation />
 */
const SlideInAnimation: React.FC = () => {
  return (
    <div className="min-h-screen bg-red-100 flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <h2 className="text-4xl font-bold mb-4">Slide In Animation</h2>
        <p className="text-xl text-gray-700">I slide in from the left!</p>
      </motion.div>
    </div>
  );
};

export default SlideInAnimation;
