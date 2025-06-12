import React, { useId } from "react";
import { motion } from "motion/react";

/**
 * EmojiRain Component
 *
 * Creates a continuous rain of animated emojis falling from the top of the screen
 * with sinusoidal horizontal movement and rotation effects.
 *
 * Features:
 * - 6 different emoji types for visual variety
 * - Vertical falling animation with sinusoidal horizontal drift
 * - Continuous rotation and scaling effects
 * - Staggered animation delays for natural distribution
 * - Infinite loop with random positioning
 */
const EmojiRain: React.FC = () => {
  const id = useId();
  const emojis = ["🎉", "✨", "🔥", "💫", "⚡", "🌟"];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {emojis.map((emoji, i) => (
        <motion.div
          key={`${id}-emoji-${i}`}
          className="absolute text-4xl"
          animate={{
            y: [
              -100,
              typeof window !== "undefined" ? window.innerHeight + 100 : 800,
            ],
            x: [0, Math.sin(Date.now() * 0.001 + i) * 100],
            rotate: [0, 360],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
          style={{
            left: Math.random() * 100 + "%",
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default EmojiRain;
