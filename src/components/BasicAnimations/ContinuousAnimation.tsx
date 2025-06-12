import React from "react";
import { motion } from "motion/react";

/**
 * ContinuousAnimation Component
 *
 * Demonstrates continuous animation properties with infinite loops.
 * Features:
 * - 360-degree rotation
 * - Scale animation with keyframes [1, 1.2, 1]
 * - Infinite repeat with easeInOut easing
 * - 2-second duration per cycle
 *
 * @example
 * <ContinuousAnimation />
 */
const ContinuousAnimation: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Animation Properties</h2>
      <motion.div
        className="w-20 h-20 bg-green-500 rounded-lg mx-auto"
        animate={{
          rotate: 360,
          scale: [1, 1.5, 1], // series of keyframes
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 1],
        }}
      />
      <p className="text-sm text-gray-600 mt-2 text-center">
        Continuous rotation & scaling
      </p>
    </div>
  );
};

export default ContinuousAnimation;
