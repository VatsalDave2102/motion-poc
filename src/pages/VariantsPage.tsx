import React from "react";
import {
  BasicVariants,
  StaggeredChildren,
  ToggleMenu,
  HoverVariants,
  CodeExample,
} from "../components/Variants";
import { motion } from "motion/react";

/**
 * VariantsPage Component
 *
 * Main page showcasing various variant animation techniques using motion/react.
 * This page demonstrates fundamental variant concepts including:
 * - Basic variant states with manual control
 * - Staggered children animations with timing orchestration
 * - Interactive toggle menus with height animations
 * - Hover and tap interaction variants
 * - Code examples for educational reference
 *
 * Each variant technique is implemented as a separate, reusable component
 * with comprehensive documentation and self-contained logic.
 */

const VariantsPage: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Variants</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BasicVariants />
        <StaggeredChildren />
        <ToggleMenu />
        <HoverVariants />
      </div>

      <CodeExample />
    </motion.div>
  );
};

export default VariantsPage;
