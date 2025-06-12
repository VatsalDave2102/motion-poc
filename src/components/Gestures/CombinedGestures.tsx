import React from "react";
import { motion } from "motion/react";

/**
 * CombinedGestures Component
 *
 * Demonstrates multiple gesture types working together on a single element.
 * Combines hover, tap, and drag interactions with different visual effects
 * for each gesture type.
 *
 * Features:
 * - Multiple gesture types on one element
 * - Hover: scale and rotation
 * - Tap: scale down effect
 * - Drag: enhanced scale and rotation
 * - Drag constraints for bounded movement
 * - Spring-based transitions
 * - Console logging for tap events
 */
const CombinedGestures: React.FC = () => {
  const handleTap = () => {
    console.log("Combined gesture element tapped!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Combined Gestures</h2>
      <motion.div
        className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-600 rounded-xl mx-auto cursor-pointer flex items-center justify-center text-white font-bold"
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        whileDrag={{ scale: 1.2, rotate: 15 }}
        onTap={handleTap}
        transition={{ type: "spring", stiffness: 300 }}
      >
        All-in-One
      </motion.div>
      <p className="text-sm text-gray-600 mt-2 text-center">
        Hover, tap, and drag me!
      </p>
    </div>
  );
};

export default CombinedGestures;
