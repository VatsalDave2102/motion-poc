import React, { useId } from "react";
import { motion } from "motion/react";

interface ChaosShapeProps {
  /** Whether the shape is in explosive animation state */
  isExploding: boolean;
  /** Callback function triggered when the shape is clicked */
  onClick: () => void;
}

/**
 * ChaosShape Component
 *
 * The main interactive element that users can click to trigger explosive animations.
 * Features a central gradient box with orbiting satellites and inner spinning elements.
 *
 * Features:
 * - Interactive click handler with hover and tap animations
 * - Two animation states: normal floating and explosive chaos
 * - Inner spinning white dots that rotate around the center
 * - Orbiting yellow satellites around the main shape
 * - Dynamic background color transitions during explosion mode
 * - Complex multi-axis animations (scale, rotate, position, color)
 */
const ChaosShape: React.FC<ChaosShapeProps> = ({ isExploding, onClick }) => {
  const id = useId();

  return (
    <motion.div
      className="relative cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="h-32 w-32 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 relative"
        animate={
          isExploding
            ? {
                scale: [1, 3, 0.5, 2, 1],
                rotate: [0, 180, 360, 540, 720],
                borderRadius: ["16px", "50%", "16px", "50%", "16px"],
                x: [-50, 50, -30, 30, 0],
                y: [-30, 30, -20, 20, 0],
                background: [
                  "linear-gradient(45deg, #f472b6, #a855f7, #6366f1)",
                  "linear-gradient(90deg, #ef4444, #f97316, #eab308)",
                  "linear-gradient(135deg, #10b981, #06b6d4, #3b82f6)",
                  "linear-gradient(180deg, #8b5cf6, #ec4899, #f59e0b)",
                  "linear-gradient(45deg, #f472b6, #a855f7, #6366f1)",
                ],
              }
            : {
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
                y: [-10, 0, -5, 0],
              }
        }
        transition={
          isExploding
            ? {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        {/* Inner spinning elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`${id}-inner-${i}`}
            className="absolute w-4 h-4 bg-white rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1 + i * 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: "50%",
              top: "50%",
              transformOrigin: `${20 + i * 5}px 0px`,
            }}
          />
        ))}
      </motion.div>

      {/* Orbiting satellites */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`${id}-satellite-${i}`}
          className="absolute w-6 h-6 bg-yellow-400 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: "50%",
            top: "50%",
            transformOrigin: `0px ${60 + i * 20}px`,
          }}
        />
      ))}
    </motion.div>
  );
};

export default ChaosShape;
