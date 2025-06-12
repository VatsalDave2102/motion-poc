import React, { useId } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ExplosionParticlesProps {
  /** Whether particles should be visible and animating */
  isVisible: boolean;
}

/**
 * ExplosionParticles Component
 *
 * Renders an array of colorful particles that explode outward from the center
 * when triggered. Creates a dramatic visual effect for user interactions.
 *
 * Features:
 * - 50 animated particles with random trajectories
 * - 6 different particle colors for variety
 * - Scale and rotation animations with random directions
 * - Smooth entrance and exit animations via AnimatePresence
 * - Particles animate outward from center point
 */
const ExplosionParticles: React.FC<ExplosionParticlesProps> = ({
  isVisible,
}) => {
  const id = useId();

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`${id}-particle-${i}`}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: [
                  "#ff6b6b",
                  "#4ecdc4",
                  "#45b7d1",
                  "#96ceb4",
                  "#feca57",
                  "#ff9ff3",
                ][i % 6],
                left: "50%",
                top: "50%",
              }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: (Math.random() - 0.5) * 600,
                y: (Math.random() - 0.5) * 600,
                rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}
    </AnimatePresence>
  );
};

export default ExplosionParticles;
