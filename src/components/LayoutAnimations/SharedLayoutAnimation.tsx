import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";

interface Item {
  id: number;
  text: string;
  color: string;
}

interface SharedLayoutAnimationProps {
  /** Array of items to display with layout animation */
  items: Item[];
}

/**
 * SharedLayoutAnimation Component
 *
 * Demonstrates shared layout animations with layout switching functionality.
 * Shows how elements smoothly transition between different layout configurations
 * using LayoutGroup and layoutId properties.
 *
 * Features:
 * - Toggle between grid and list layouts
 * - Smooth transitions between layout states
 * - Shared layout IDs for coordinated animations
 * - Hover and tap interactions with scaling
 * - Spring-based transitions for natural movement
 * - AnimatePresence for enter/exit animations
 *
 * @example
 * <SharedLayoutAnimation items={itemsArray} />
 */
const SharedLayoutAnimation: React.FC<SharedLayoutAnimationProps> = ({
  items,
}) => {
  const [isGrid, setIsGrid] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shared Layout Animation</h2>
      <div className="mb-4">
        <button
          onClick={() => setIsGrid(!isGrid)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Toggle Layout: {isGrid ? "Grid" : "List"}
        </button>
      </div>

      <LayoutGroup>
        <motion.div
          layout
          className={`${isGrid ? "grid grid-cols-2 gap-2" : "space-y-2"}`}
        >
          <AnimatePresence>
            {items.slice(0, 4).map((item) => (
              <motion.div
                key={item.id}
                layout
                layoutId={`shared-item-${item.id}`}
                className={`${item.color} text-white p-4 rounded cursor-pointer`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {item.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
};

export default SharedLayoutAnimation;
