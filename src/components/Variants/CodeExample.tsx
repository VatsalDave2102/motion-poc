import React from "react";

/**
 * CodeExample Component
 *
 * Displays a syntax example of how to use variants in motion/react.
 * Features:
 * - Formatted code block with syntax highlighting
 * - Dark theme for better code readability
 * - Clear example of variant definition and usage
 * - Educational reference for developers
 *
 * @example
 * <CodeExample />
 */
const CodeExample: React.FC = () => {
  const codeExample = `const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
/>`;

  return (
    <div className="mt-8 bg-gray-900 text-green-400 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-white">
        Variants Code Example:
      </h3>
      <pre className="text-sm overflow-x-auto">{codeExample}</pre>
    </div>
  );
};

export default CodeExample;
