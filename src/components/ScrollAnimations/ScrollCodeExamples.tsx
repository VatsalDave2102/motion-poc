import React from "react";

/**
 * ScrollCodeExamples Component
 *
 * Educational component displaying code examples for scroll animations.
 * Features:
 * - Syntax-highlighted code examples using CSS classes
 * - Dark theme for better code readability
 * - Horizontal scrolling for long code lines
 * - Comprehensive examples covering different scroll animation techniques
 * - Reference material for developers learning motion/react
 *
 * @example
 * <ScrollCodeExamples />
 */
const ScrollCodeExamples: React.FC = () => {
  const codeExamples = `// Progress bar
const { scrollYProgress } = useScroll();
<motion.div style={{ scaleX: scrollYProgress }} />

// Parallax
const x = useTransform(scrollYProgress, [0, 1], [0, 300]);
<motion.div style={{ x }} />

// Reveal on scroll
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
/>

// Staggered animations
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
>
  {items.map(item => (
    <motion.div variants={itemVariants} />
  ))}
</motion.div>`;

  return (
    <div className="bg-gray-900 text-green-400 p-8">
      <h3 className="text-lg font-semibold mb-4 text-white">
        Scroll Animation Code Examples:
      </h3>
      <pre className="text-sm overflow-x-auto">{codeExamples}</pre>
    </div>
  );
};

export default ScrollCodeExamples;
