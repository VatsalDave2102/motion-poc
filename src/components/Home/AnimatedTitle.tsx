import React from "react";
import { motion } from "motion/react";

/**
 * AnimatedTitle Component
 *
 * Displays the main title with dynamic animations including scaling, rotation,
 * and colorful text shadow effects that cycle through different colors.
 *
 * Features:
 * - Continuous scaling and subtle rotation animations
 * - Dynamic text shadow that cycles through multiple colors
 * - Reverse animation type for smooth transitions
 * - Large, bold typography for maximum visual impact
 */
const AnimatedTitle: React.FC<{ isExploding: boolean }> = ({ isExploding }) => {
  return (
    <motion.h1
      className="text-6xl font-bold text-white mb-8 text-center"
      animate={{
        scale: [1, 1.2, 0.8, 1.1, 1],
        rotate: isExploding ? [0, 360, 90, 360] : [-2, -1, 1, 2, 0],
        textShadow: [
          "0px 0px 0px rgba(255,255,255,0.8)",
          "0px 0px 20px rgba(255,0,255,0.8)",
          "0px 0px 40px rgba(0,255,255,0.8)",
          "0px 0px 20px rgba(255,255,0,0.8)",
          "0px 0px 0px rgba(255,255,255,0.8)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      Motion at 💯% Power!
    </motion.h1>
  );
};

export default AnimatedTitle;
