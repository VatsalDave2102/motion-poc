import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * DragGesture Component
 *
 * Demonstrates draggable functionality with position tracking and constraints.
 * Shows real-time position updates and visual feedback during drag operations.
 *
 * Features:
 * - Draggable element with constraints
 * - Real-time position tracking
 * - Scale and shadow effects while dragging
 * - Constrained movement within bounds
 * - Position display with rounded values
 */
const DragGesture: React.FC = () => {
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Drag Functionality</h2>
      <div className="h-48 border-2 border-dashed border-gray-300 rounded-lg relative overflow-hidden">
        <motion.div
          className="w-16 h-16 bg-red-500 rounded-full cursor-grab active:cursor-grabbing flex items-center justify-center text-white font-bold absolute"
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 500,
            bottom: 140,
          }}
          onDrag={(_event, info) => {
            setDragPosition({ x: info.point.x, y: info.point.y });
          }}
          whileDrag={{
            scale: 1.2,
            boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)",
          }}
        >
          🎯
        </motion.div>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Position: x:{Math.round(dragPosition.x)}, y:{Math.round(dragPosition.y)}
      </p>
    </div>
  );
};

export default DragGesture;
