import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * StaggeredChildren Component
 *
 * Demonstrates staggered animations with parent-child variant propagation.
 * Features:
 * - Container variant that orchestrates child animations
 * - Staggered delay between child elements (0.2s)
 * - Initial delay before children start animating (0.3s)
 * - Replay functionality to restart the animation sequence
 *
 * @example
 * <StaggeredChildren />
 */
const StaggeredChildren: React.FC = () => {
  const [animationKey, setAnimationKey] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Staggered Children</h2>
      <motion.div
        className="space-y-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={animationKey} // Force re-animation
      >
        {items.map((item) => (
          <motion.div
            key={`${item}-${animationKey}`}
            className="p-3 bg-green-100 rounded border-l-4 border-green-500"
            variants={itemVariants}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
      <button
        onClick={handleReplay}
        className="mt-4 px-3 py-1 bg-green-500 text-white rounded text-sm"
      >
        Replay Animation
      </button>
    </div>
  );
};

export default StaggeredChildren;
