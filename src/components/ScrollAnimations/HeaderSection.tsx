import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * HeaderSection Component
 *
 * Hero section with scroll-triggered opacity and scale animations.
 * Features:
 * - Fade out effect as user scrolls (opacity: 1 → 0)
 * - Scale down effect during scroll (scale: 1 → 0.8)
 * - Full viewport height with gradient background
 * - Centered content with large typography
 * - Smooth transform animations based on scroll progress
 *
 * @example
 * <HeaderSection />
 */
const HeaderSection: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to different values
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <motion.div className="text-center text-white" style={{ opacity, scale }}>
        <h1 className="text-5xl font-bold mb-4">Scroll Animations</h1>
        <p className="text-xl">Scroll down to see the magic ✨</p>
      </motion.div>
    </div>
  );
};

export default HeaderSection;
