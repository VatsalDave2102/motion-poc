import React, { useId } from "react";
import { motion } from "motion/react";

/**
 * BackgroundChaos Component
 *
 * Renders animated floating particles in the background that move randomly
 * across the screen in continuous loops. Creates a chaotic, energetic atmosphere.
 *
 * Features:
 * - 20 yellow circular particles
 * - Random movement patterns with varying durations
 * - Continuous scaling and rotation animations
 * - Staggered animation delays for natural distribution
 */
const BackgroundChaos: React.FC = () => {
  const id = useId();

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={`${id}-${index}`}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          animate={{
            x: [0, Math.random() * 1000, 0],
            y: [0, Math.random() * 600, 0],
            scale: [0, 1, 0],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundChaos;
