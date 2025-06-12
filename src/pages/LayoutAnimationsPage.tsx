import React, { useState } from "react";
import {
  SharedLayoutAnimation,
  AddRemoveItems,
  SharedLayoutModal,
  ExpandableCards,
  LayoutCodeExamples,
} from "../components/LayoutAnimations";
import { motion } from "motion/react";

// Define the Item interface for type safety
interface Item {
  id: number;
  text: string;
  color: string;
}

/**
 * LayoutAnimationsPage Component
 *
 * Main page showcasing various layout animation techniques using motion/react.
 * This page has been refactored into smaller, focused components for better
 * maintainability, reusability, and readability.
 *
 * Features:
 * - Modular component structure with clear separation of concerns
 * - Comprehensive layout animation examples
 * - Shared state management for interactive components
 * - Educational code examples for learning reference
 * - Responsive grid layout that adapts to different screen sizes
 * - Type-safe interfaces for all data structures
 *
 * Components demonstrated:
 * - SharedLayoutAnimation: Layout switching with smooth transitions
 * - AddRemoveItems: Dynamic list manipulation with animations
 * - SharedLayoutModal: Card-to-modal shared layout transitions
 * - ExpandableCards: Collapsible content with height animations
 * - LayoutCodeExamples: Educational code reference material
 */
const LayoutAnimationsPage: React.FC = () => {
  // State for the items used in both SharedLayoutAnimation and AddRemoveItems
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: "Item 1", color: "bg-blue-500" },
    { id: 2, text: "Item 2", color: "bg-green-500" },
    { id: 3, text: "Item 3", color: "bg-red-500" },
    { id: 4, text: "Item 4", color: "bg-purple-500" },
    { id: 5, text: "Item 5", color: "bg-yellow-500" },
  ]);

  // State for the modal component
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // State for the expandable cards component
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Available colors for new items
  const availableColors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
  ];
  // Handler functions for item manipulation
  const handleAddItem = () => {
    const newId = Math.max(...items.map((i) => i.id)) + 1;
    const randomColor =
      availableColors[Math.floor(Math.random() * availableColors.length)];

    setItems((prev) => [
      ...prev,
      {
        id: newId,
        text: `Item ${newId}`,
        color: randomColor,
      },
    ]);
  };

  const handleRemoveItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleShuffleItems = () => {
    setItems((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Layout Animations</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Shared Layout Animation Component */}
        <SharedLayoutAnimation items={items} />

        {/* Add/Remove Items Component */}
        <AddRemoveItems
          items={items}
          onAddItem={handleAddItem}
          onRemoveItem={handleRemoveItem}
          onShuffleItems={handleShuffleItems}
        />

        {/* Modal with Shared Layout Component */}
        <SharedLayoutModal
          selectedId={selectedId}
          onSelectCard={setSelectedId}
        />

        {/* Expandable Cards Component */}
        <ExpandableCards
          expandedCard={expandedCard}
          onExpandCard={setExpandedCard}
        />
      </div>

      {/* Educational Code Examples */}
      <LayoutCodeExamples />
    </motion.div>
  );
};

export default LayoutAnimationsPage;
