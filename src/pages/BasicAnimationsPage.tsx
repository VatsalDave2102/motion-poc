import React from "react";
import {
  SimpleTransition,
  ContinuousAnimation,
  ToggleAnimation,
  PositionAnimation,
  StaggerAnimation,
} from "../components/BasicAnimations";
import { motion } from "motion/react";

/**
 * BasicAnimationsPage Component
 *
 * Main page showcasing various basic animation techniques using motion/react.
 * This page demonstrates fundamental animation concepts including:
 * - Interactive hover/tap animations
 * - Continuous looping animations
 * - State-controlled toggle animations
 * - Spring-based position animations
 * - Staggered multi-element animations
 *
 * Each animation is implemented as a separate, reusable component
 * with comprehensive documentation and self-contained logic.
 */

const BasicAnimationsPage: React.FC = () => {
  return (
    <motion.div
      className="bg-gray-100 p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Basic Animations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SimpleTransition />
        <ContinuousAnimation />
        <ToggleAnimation />
        <PositionAnimation />
        <StaggerAnimation />
      </div>
    </motion.div>
  );
};

export default BasicAnimationsPage;
