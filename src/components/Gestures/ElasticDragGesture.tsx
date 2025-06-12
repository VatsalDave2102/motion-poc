import React from "react";
import { motion } from "motion/react";

/**
 * ElasticDragGesture Component
 *
 * Demonstrates drag functionality with elastic constraints.
 * When dragged beyond bounds, the element exhibits elastic behavior,
 * snapping back to the constraint boundaries with a rubber-band effect.
 *
 * Features:
 * - Elastic drag constraints (dragElastic)
 * - Visual bounds indication
 * - Scale animation while dragging
 * - Rubber-band effect when dragging outside bounds
 * - Helpful instruction text
 */
const ElasticDragGesture: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Elastic Constraints</h2>
      <div className="h-48 border-2 border-yellow-300 rounded-lg relative bg-yellow-50">
        <motion.div
          className="w-12 h-12 bg-yellow-500 rounded-lg cursor-grab active:cursor-grabbing absolute top-20 left-20"
          drag
          dragElastic={0.2}
          dragConstraints={{
            top: -50,
            left: -50,
            right: 500,
            bottom: 50,
          }}
          whileDrag={{ scale: 1.1 }}
        />
        <p className="absolute bottom-2 left-2 text-xs text-yellow-700">
          Drag outside bounds for elastic effect
        </p>
      </div>
    </div>
  );
};

export default ElasticDragGesture;
