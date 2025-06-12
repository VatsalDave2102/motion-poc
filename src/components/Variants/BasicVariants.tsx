import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * BasicVariants Component
 *
 * Demonstrates basic variant usage with multiple animation states.
 * Features:
 * - Three distinct animation states: hidden, visible, exit
 * - Interactive buttons to switch between variants
 * - Opacity, scale, and rotation animations
 * - Custom transitions for each state
 *
 * @example
 * <BasicVariants />
 */
const BasicVariants: React.FC = () => {
  const [currentVariant, setCurrentVariant] = useState("hidden");

  // Define variants for reusable animation states
  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Basic Variants</h2>
      <div className="text-center">
        <motion.div
          className="w-20 h-20 bg-blue-500 rounded-lg mx-auto mb-4"
          variants={boxVariants}
          initial="hidden"
          animate={currentVariant}
        />
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => setCurrentVariant("hidden")}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
          >
            Hidden
          </button>
          <button
            onClick={() => setCurrentVariant("visible")}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
          >
            Visible
          </button>
          <button
            onClick={() => setCurrentVariant("exit")}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicVariants;
