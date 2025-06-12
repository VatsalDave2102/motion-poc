import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * TapGesture Component
 *
 * Demonstrates tap interactions with visual feedback and state tracking.
 * Each tap increments a counter and applies rotation and color changes.
 *
 * Features:
 * - Tap counter with state management
 * - Scale animation on tap (whileTap)
 * - Rotation animation based on tap count
 * - Dynamic color changes using HSL
 * - Reset functionality
 * - Spring-based transitions
 */
const TapGesture: React.FC = () => {
  const [tapCount, setTapCount] = useState(0);

  const handleReset = () => {
    setTapCount(0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Tap Gestures</h2>
      <div className="text-center">
        <motion.div
          className="w-32 h-32 bg-green-500 rounded-lg mx-auto cursor-pointer flex items-center justify-center text-white font-bold mb-4"
          whileTap={{ scale: 0.9 }}
          onTap={() => setTapCount(tapCount + 1)}
          animate={{
            rotate: tapCount * 45,
            backgroundColor: `hsl(${120 + tapCount * 30}, 70%, 50%)`,
          }}
          transition={{ type: "spring" }}
        >
          Tap Me
        </motion.div>
        <p className="text-sm text-gray-600">Taps: {tapCount}</p>
        <button
          onClick={handleReset}
          className="mt-2 px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TapGesture;
