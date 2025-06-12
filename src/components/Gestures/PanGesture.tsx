import React, { useState } from "react";
import { motion } from "motion/react";
import type { PanInfo } from "motion/react";

/**
 * PanGesture Component
 *
 * Demonstrates pan gesture functionality with real-time offset tracking.
 * Pan gestures track movement across the element surface and provide
 * detailed information about the gesture.
 *
 * Features:
 * - Pan gesture detection across element surface
 * - Real-time offset tracking (x, y coordinates)
 * - Visual feedback with scale animation on interaction
 * - Information display showing current pan offset
 */
const PanGesture: React.FC = () => {
  const [panInfo, setPanInfo] = useState<string>("");

  const handlePan = (_event: PointerEvent, info: PanInfo) => {
    setPanInfo(
      `Offset: x:${Math.round(info.offset.x)}, y:${Math.round(info.offset.y)}`
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Pan Gestures</h2>
      <motion.div
        className="w-full h-32 bg-purple-500 rounded-lg cursor-pointer flex items-center justify-center text-white font-bold"
        onPan={handlePan}
        whileTap={{ scale: 0.98 }}
      >
        Pan Across Me
      </motion.div>
      <p className="text-sm text-gray-600 mt-2">
        {panInfo || "Start panning to see info"}
      </p>
    </div>
  );
};

export default PanGesture;
