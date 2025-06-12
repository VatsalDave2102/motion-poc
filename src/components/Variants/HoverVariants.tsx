import React from "react";
import { motion } from "motion/react";

/**
 * HoverVariants Component
 *
 * Demonstrates interactive hover and tap variants with visual feedback.
 * Features:
 * - Scale animation on hover (1.05x)
 * - Enhanced box shadow on hover
 * - Scale down effect on tap (0.95x)
 * - Smooth transitions between states
 * - Gradient background for visual appeal
 *
 * @example
 * <HoverVariants />
 */
const HoverVariants: React.FC = () => {
  const hoverVariants = {
    initial: {
      scale: 1,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Hover Variants</h2>
      <motion.div
        className="w-full h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg cursor-pointer flex items-center justify-center text-white font-semibold"
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        Hover & Click Me
      </motion.div>
    </div>
  );
};

export default HoverVariants;
