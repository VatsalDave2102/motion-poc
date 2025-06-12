import React from "react";
import {
  HoverGesture,
  TapGesture,
  DragGesture,
  PanGesture,
  ElasticDragGesture,
  CombinedGestures,
  CodeExample,
} from "../components/Gestures";
import { motion } from "motion/react";

/**
 * GesturesPage Component
 *
 * Main page showcasing various gesture interactions using Framer Motion.
 * This page has been refactored to use smaller, focused components for
 * better maintainability and reusability.
 *
 * Features:
 * - Modular component structure
 * - Comprehensive gesture examples
 * - Code examples for learning
 * - Responsive grid layout
 * - Well-documented individual components
 */
const GesturesPage: React.FC = () => {
  // Code examples for educational purposes
  const gestureCodeExamples = [
    {
      label: "Hover Gesture",
      code: `<motion.div whileHover={{ scale: 1.1 }} />`,
    },
    {
      label: "Tap Gesture",
      code: `<motion.div whileTap={{ scale: 0.9 }} onTap={() => {}} />`,
    },
    {
      label: "Drag Gesture",
      code: `<motion.div 
  drag 
  dragConstraints={{ left: 0, right: 300 }}
  onDrag={(event, info) => {}}
/>`,
    },
    {
      label: "Pan Gesture",
      code: `<motion.div onPan={(event, info) => {}} />`,
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Gestures</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <HoverGesture />
        <TapGesture />
        <DragGesture />
        <PanGesture />
        <ElasticDragGesture />
        <CombinedGestures />
      </div>

      <CodeExample
        title="Gestures Code Examples:"
        examples={gestureCodeExamples}
      />
    </motion.div>
  );
};

export default GesturesPage;
