import React from "react";

interface CodeExampleProps {
  title?: string;
  examples: Array<{
    label: string;
    code: string;
  }>;
}

/**
 * CodeExample Component
 *
 * A reusable component for displaying code examples with syntax highlighting.
 * Used to show implementation examples for gesture components.
 *
 * Props:
 * - title: Optional title for the code examples section
 * - examples: Array of code examples with labels and code strings
 *
 * Features:
 * - Dark theme code display
 * - Horizontal scrolling for long code
 * - Multiple code examples support
 * - Responsive design
 */
const CodeExample: React.FC<CodeExampleProps> = ({
  title = "Code Examples:",
  examples,
}) => {
  return (
    <div className="mt-8 bg-gray-900 text-green-400 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
      <pre className="text-sm overflow-x-auto">
        {examples.map((example, index) => (
          <div key={index} className="mb-4">
            <div className="text-gray-300 mb-2">// {example.label}</div>
            <div>{example.code}</div>
          </div>
        ))}
      </pre>
    </div>
  );
};

export default CodeExample;
