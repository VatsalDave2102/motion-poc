import React from "react";
import {
  ScrollProgressBar,
  HeaderSection,
  ParallaxSection,
  RevealOnScroll,
  ScaleOnScroll,
  StaggeredGrid,
  SlideInAnimation,
  FinalSection,
  ScrollCodeExamples,
} from "../components/ScrollAnimations";
import { motion } from "motion/react";

/**
 * ScrollAnimationsPage Component
 *
 * Main page showcasing various scroll-triggered animation techniques using motion/react.
 * This page demonstrates fundamental scroll animation concepts including:
 * - Scroll progress indicators
 * - Parallax effects and transforms
 * - Viewport-triggered reveal animations
 * - Spring-based scale animations
 * - Staggered grid animations
 * - Horizontal slide-in effects
 * - Educational code examples
 *
 * Each animation technique is implemented as a separate, reusable component
 * with comprehensive documentation and self-contained logic.
 */

const ScrollAnimationsPage: React.FC = () => {
  return (
    <motion.div
      className="bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Fixed scroll progress indicator */}
      <ScrollProgressBar />

      {/* Hero section with fade-out effect */}
      <HeaderSection />

      {/* Horizontal parallax movement */}
      <ParallaxSection />

      {/* Staggered card reveals */}
      <RevealOnScroll />

      {/* Spring-based scale animation */}
      <ScaleOnScroll />

      {/* Coordinated grid animations */}
      <StaggeredGrid />

      {/* Horizontal slide-in effect */}
      <SlideInAnimation />

      {/* Dramatic conclusion */}
      <FinalSection />

      {/* Educational code reference */}
      <ScrollCodeExamples />
    </motion.div>
  );
};

export default ScrollAnimationsPage;
