import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * ToggleMenu Component
 *
 * Demonstrates animated menu toggle with height and opacity variants.
 * Features:
 * - Smooth height animation from 0 to auto
 * - Opacity fade in/out transitions
 * - Rotating arrow indicator
 * - Interactive menu items with hover effects
 *
 * @example
 * <ToggleMenu />
 */
const ToggleMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const menuItems = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Toggle Menu</h2>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 flex justify-between items-center"
        >
          Menu
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ↓
          </motion.span>
        </button>
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="overflow-hidden bg-purple-50 mt-2 rounded"
        >
          <div className="p-4 space-y-2">
            {menuItems.map((item) => (
              <div
                key={item}
                className="p-2 hover:bg-purple-100 rounded cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToggleMenu;
