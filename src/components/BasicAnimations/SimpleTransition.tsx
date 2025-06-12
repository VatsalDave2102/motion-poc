import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * SimpleTransition Component
 *
 * Demonstrates basic hover and tap interactions using motion/react.
 * Features:
 * - Scale up on hover (1.2x)
 * - Scale down on tap (0.9x)
 * - Smooth transitions with 0.3s duration
 * - Restarts animation on button click
 *
 * @example
 * <SimpleTransition />
 */
const SimpleTransition: React.FC = () => {
  const [animationKey, setAnimationKey] = useState(0);

  const restartAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Simple Transition</h2>
      <motion.div
        key={animationKey}
        className="w-20 h-20 bg-blue-500 rounded-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={{ rotate: 90, scale: 1.2, x: 100, opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <button
        onClick={restartAnimation}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto block"
      >
        Restart Animation
      </button>
    </div>
  );
};

export default SimpleTransition;
