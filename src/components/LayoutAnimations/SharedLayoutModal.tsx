import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface SharedLayoutModalProps {
  /** Currently selected card ID, null if no card is selected */
  selectedId: number | null;
  /** Callback function to set the selected card ID */
  onSelectCard: (id: number | null) => void;
}

/**
 * SharedLayoutModal Component
 *
 * Demonstrates shared layout animations between a grid of cards and a modal.
 * When a card is clicked, it smoothly transitions from its grid position to
 * fill a modal overlay using the same layoutId for seamless animation.
 *
 * Features:
 * - Grid of 4 interactive cards with gradient backgrounds
 * - Shared layoutId for smooth card-to-modal transitions
 * - Modal overlay with backdrop blur and click-outside-to-close
 * - Scale animations on hover and tap for card interactions
 * - Detailed modal content with close functionality
 * - Full-screen modal positioning with centering
 *
 * @example
 * <SharedLayoutModal
 *   selectedId={selectedId}
 *   onSelectCard={setSelectedId}
 * />
 */
const SharedLayoutModal: React.FC<SharedLayoutModalProps> = ({
  selectedId,
  onSelectCard,
}) => {
  const handleCardClick = (id: number) => {
    onSelectCard(id);
  };

  const handleCloseModal = () => {
    onSelectCard(null);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
      <h2 className="text-xl font-semibold mb-4">Modal with Shared Layout</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((id) => (
          <motion.div
            key={id}
            layoutId={`modal-card-${id}`}
            onClick={() => handleCardClick(id)}
            className="bg-gradient-to-br from-blue-400 to-purple-600 text-white p-6 rounded-lg cursor-pointer aspect-square flex items-center justify-center font-bold text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Card {id}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={handleBackdropClick}
          >
            <motion.div
              layoutId={`modal-card-${selectedId}`}
              className="bg-gradient-to-br from-blue-400 to-purple-600 text-white p-8 rounded-lg m-4 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">Card {selectedId}</h3>
              <p className="mb-4">
                This is the expanded view of card {selectedId}. Notice how it
                smoothly transitions from the grid item to this modal using
                shared layout animation. The element maintains its visual
                continuity throughout the transformation.
              </p>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-white text-purple-600 rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SharedLayoutModal;
