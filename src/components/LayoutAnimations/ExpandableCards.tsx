import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface ExpandableCardsProps {
  /** Currently expanded card ID, null if no card is expanded */
  expandedCard: number | null;
  /** Callback function to set the expanded card ID */
  onExpandCard: (id: number | null) => void;
}

/**
 * ExpandableCards Component
 *
 * Demonstrates layout animations for expandable/collapsible content areas.
 * Shows how layout animations can smoothly handle height changes when
 * content is expanded or collapsed with automatic positioning adjustments.
 *
 * Features:
 * - Three expandable cards with toggle functionality
 * - Smooth height animations from 0 to auto and back
 * - Rotating arrow indicators for expanded state
 * - Layout animations for automatic repositioning of other cards
 * - Overflow hidden to prevent content jumping
 * - Eased transitions for natural feel
 * - Click-anywhere-on-header to toggle functionality
 *
 * @example
 * <ExpandableCards
 *   expandedCard={expandedCard}
 *   onExpandCard={setExpandedCard}
 * />
 */
const ExpandableCards: React.FC<ExpandableCardsProps> = ({
  expandedCard,
  onExpandCard,
}) => {
  const handleCardClick = (id: number) => {
    onExpandCard(expandedCard === id ? null : id);
  };

  const cardData = [
    {
      id: 1,
      title: "Expandable Card 1",
      content:
        "This is the expanded content for card 1. The layout automatically adjusts as the content expands and contracts, creating smooth transitions between states. Notice how other cards smoothly reposition themselves.",
    },
    {
      id: 2,
      title: "Expandable Card 2",
      content:
        "This card demonstrates how multiple expandable elements can work together harmoniously. The layout animation system ensures that all elements move smoothly when one expands or collapses.",
    },
    {
      id: 3,
      title: "Expandable Card 3",
      content:
        "The third card shows consistent behavior across all expandable elements. Each card maintains its own state while participating in the overall layout flow, creating a cohesive user experience.",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
      <h2 className="text-xl font-semibold mb-4">Expandable Cards</h2>

      <div className="space-y-4">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            layout
            className="border border-gray-200 rounded-lg overflow-hidden"
            initial={false}
          >
            <motion.div
              layout
              className="p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleCardClick(card.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">{card.title}</h3>
                <motion.span
                  animate={{ rotate: expandedCard === card.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-500 text-lg"
                >
                  ↓
                </motion.span>
              </div>
            </motion.div>

            <AnimatePresence initial={false}>
              {expandedCard === card.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {card.content}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableCards;
