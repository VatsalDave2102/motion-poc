import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * PositionAnimation Component
 *
 * Demonstrates spring-based position animations with user controls.
 * Features:
 * - Horizontal position animation (x-axis)
 * - Spring transition with customizable stiffness and damping
 * - Three preset positions: Left (0), Center (150), Right (300)
 * - Interactive buttons to control position
 *
 * @example
 * <PositionAnimation />
 */
const PositionAnimation: React.FC = () => {
  const [position, setPosition] = useState(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Position Animation</h2>
      <div className="relative h-24 border-2 border-gray-200 rounded">
        <motion.div
          className="absolute w-8 h-8 bg-red-500 rounded-full top-2"
          animate={{ x: position }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      </div>
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPosition(0)}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm"
        >
          Left
        </button>
        <button
          onClick={() => setPosition(150)}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm"
        >
          Center
        </button>
        <button
          onClick={() => setPosition(300)}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm"
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default PositionAnimation;
