import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * ToggleAnimation Component
 *
 * Demonstrates state-controlled animations with opacity and position changes.
 * Features:
 * - Toggle visibility with opacity animation (1 to 0)
 * - Vertical position animation (0 to -50px)
 * - Interactive button to control state
 * - Smooth 0.5s transitions
 *
 * @example
 * <ToggleAnimation />
 */
const ToggleAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Toggle Animation</h2>
      <div className="text-center">
        <div className="flex gap-5">
          {/* bad practice */}
          <motion.div
            className="w-20 h-20 bg-red-500 rounded-lg mx-auto mb-4"
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : -50,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* good practice */}
          <AnimatePresence initial={false}>
            {isVisible ? (
              <motion.div
                className="w-20 h-20 bg-purple-500 rounded-lg mx-auto mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              />
            ) : null}
          </AnimatePresence>
        </div>

        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Toggle Visibility
        </button>
      </div>
    </div>
  );
};

export default ToggleAnimation;
