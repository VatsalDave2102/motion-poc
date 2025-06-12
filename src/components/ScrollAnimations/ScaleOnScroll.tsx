import React from "react";
import { motion } from "motion/react";

/**
 * ScaleOnScroll Component
 *
 * Demonstrates spring-based scale animation triggered when element enters viewport.
 * Features:
 * - Element scales from 0 to 1 when scrolling into view
 * - Spring transition with custom stiffness and damping
 * - Repeatable animation (once: false) for continuous effect
 * - Circular shape with emoji content for visual appeal
 * - Bouncy animation feel with spring physics
 *
 * @example
 * <ScaleOnScroll />
 */
const ScaleOnScroll: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center">
      <motion.div
        className="w-64 h-64 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-2xl"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }} //Animation repeats every time the element enters the viewport
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        Scale Me!
      </motion.div>
    </div>
  );
};

export default ScaleOnScroll;
