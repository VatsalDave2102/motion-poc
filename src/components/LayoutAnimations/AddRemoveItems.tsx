import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface Item {
  id: number;
  text: string;
  color: string;
}

interface AddRemoveItemsProps {
  /** Array of items to display and manipulate */
  items: Item[];
  /** Callback function to add a new item */
  onAddItem: () => void;
  /** Callback function to remove an item by ID */
  onRemoveItem: (id: number) => void;
  /** Callback function to shuffle the items array */
  onShuffleItems: () => void;
}

/**
 * AddRemoveItems Component
 *
 * Demonstrates layout animations when adding, removing, and reordering items.
 * Shows how layout animations automatically handle list changes with smooth
 * transitions for entering, exiting, and repositioning elements.
 *
 * Features:
 * - Add new items with slide-in animation from left
 * - Remove items with slide-out animation to right
 * - Shuffle functionality with automatic layout repositioning
 * - Scrollable container with fixed height
 * - Spring-based layout transitions
 * - Interactive remove buttons with hover effects
 *
 * @example
 * <AddRemoveItems
 *   items={items}
 *   onAddItem={handleAdd}
 *   onRemoveItem={handleRemove}
 *   onShuffleItems={handleShuffle}
 * />
 */
const AddRemoveItems: React.FC<AddRemoveItemsProps> = ({
  items,
  onAddItem,
  onRemoveItem,
  onShuffleItems,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add/Remove Items</h2>
      <div className="mb-4 space-x-2">
        <button
          onClick={onAddItem}
          className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
        >
          Add Item
        </button>
        <button
          onClick={onShuffleItems}
          className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 transition-colors"
        >
          Shuffle
        </button>
      </div>

      <motion.div layout className="space-y-2 max-h-64 overflow-y-auto">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className={`${item.color} text-white p-3 rounded flex justify-between items-center`}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <span>{item.text}</span>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-white hover:text-red-200 font-bold text-lg leading-none"
                aria-label={`Remove ${item.text}`}
              >
                ×
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AddRemoveItems;
