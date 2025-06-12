import React from "react";
import { motion } from "motion/react";

/**
 * PulsatingText Component
 *
 * Displays instructional text with gentle pulsating animations to draw
 * user attention without being too distracting.
 *
 * Features:
 * - Smooth opacity and scale transitions
 * - Continuous pulsating animation
 * - Responsive text sizing and centering
 * - Encourages user interaction with the main element
 */
const PulsatingText: React.FC = () => {
  return (
    <motion.p
      className="text-white text-xl mt-8 text-center max-w-md"
      animate={{
        opacity: [0.7, 1, 0.7],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      Click the shape to unleash MAXIMUM CHAOS! 🚀✨💥
    </motion.p>
  );
};

export default PulsatingText;
