import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * ParallaxSection Component
 *
 * Demonstrates parallax scrolling effect with horizontal movement.
 * Features:
 * - Background moves horizontally as user scrolls (x: 0 → 300px)
 * - Creates depth perception through differential movement speeds
 * - Foreground content remains stationary while background shifts
 * - Semi-transparent overlay for content readability
 * - Backdrop blur effect for modern glass morphism aesthetic
 *
 * @example
 * <ParallaxSection />
 */
const ParallaxSection: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600"
        style={{ x }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white/90 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4">Parallax Effect</h2>
          <p className="text-gray-700">
            The background moves as you scroll, creating depth
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
