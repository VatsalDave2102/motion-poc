import React from "react";
import { motion } from "motion/react";

/**
 * HoverGesture Component
 *
 * Demonstrates hover interactions using Framer Motion's whileHover prop.
 * Shows scale transformation, color change, and shadow effects on hover.
 *
 * Features:
 * - Scale animation on hover
 * - Background color transition
 * - Box shadow effect
 * - Spring-based transition for smooth feel
 */
const HoverGesture: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Hover Gestures</h2>
      <motion.div
        className="w-32 h-32 bg-blue-500 rounded-lg mx-auto cursor-pointer flex items-center justify-center text-white font-bold"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#3b82f6",
          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Hover Me
      </motion.div>
    </div>
  );
};

export default HoverGesture;
