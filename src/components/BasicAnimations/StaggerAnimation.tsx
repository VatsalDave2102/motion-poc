import React from "react";
import { motion } from "motion/react";

/**
 * StaggerAnimation Component
 *
 * Demonstrates staggered animations across multiple elements.
 * Features:
 * - 5 animated squares with bounce effect
 * - Vertical movement animation (0 to -20px and back)
 * - Staggered delays (0.1s increment per element)
 * - Infinite loop with 0.6s duration per cycle
 *
 * @example
 * <StaggerAnimation />
 */
const StaggerAnimation: React.FC = () => {
  // Generate stable IDs for the animation elements
  const animationElements = Array.from({ length: 5 }, (_, i) => ({
    id: `bounce-${i}`,
    delay: i * 0.1,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
      <h2 className="text-xl font-semibold mb-4">Stagger Animation</h2>
      <div className="flex justify-center gap-2">
        {animationElements.map((element) => (
          <motion.div
            key={element.id}
            className="w-12 h-12 bg-yellow-500 rounded"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: element.delay,
            }}
          />
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-2 text-center">
        Staggered bounce animation
      </p>
    </div>
  );
};

export default StaggerAnimation;
