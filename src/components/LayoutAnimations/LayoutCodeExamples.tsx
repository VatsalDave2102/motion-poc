import React from "react";

/**
 * LayoutCodeExamples Component
 *
 * Educational component displaying comprehensive code examples for layout animations.
 * Provides developers with practical implementation references for various
 * layout animation techniques using motion/react.
 *
 * Features:
 * - Syntax-highlighted code examples using CSS classes
 * - Dark theme for better code readability
 * - Horizontal scrolling for long code lines
 * - Comprehensive examples covering different layout animation patterns
 * - Reference material for developers learning motion/react layout animations
 *
 * @example
 * <LayoutCodeExamples />
 */
const LayoutCodeExamples: React.FC = () => {
  const codeExamples = `// Basic layout animation
<motion.div layout />

// Shared layout animation
<motion.div layoutId="unique-id" />

// Layout group for coordinated animations
<LayoutGroup>
  <motion.div layout />
  <motion.div layout />
</LayoutGroup>

// Layout with AnimatePresence
<AnimatePresence>
  <motion.div 
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  />
</AnimatePresence>

// Layout transition with custom springs
<motion.div 
  layout
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
/>

// Shared layout between different components
<motion.div 
  layoutId="shared-element"
  className={isExpanded ? "expanded" : "collapsed"}
/>`;

  return (
    <div className="mt-8 bg-gray-900 text-green-400 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-white">
        Layout Animation Code Examples:
      </h3>
      <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
        {codeExamples}
      </pre>
    </div>
  );
};

export default LayoutCodeExamples;
