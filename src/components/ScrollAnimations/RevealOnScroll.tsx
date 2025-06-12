import React from "react";
import { motion } from "motion/react";

/**
 * RevealOnScroll Component
 *
 * Demonstrates staggered reveal animations triggered when elements enter the viewport.
 * Features:
 * - Elements animate from invisible to visible when scrolling into view
 * - Staggered delay between cards (0.1s increment per card)
 * - Upward movement animation (y: 50 → 0)
 * - Viewport margin for early trigger (-100px)
 * - One-time animation (once: true) for performance
 *
 * @example
 * <RevealOnScroll />
 */
const RevealOnScroll: React.FC = () => {
  const cards = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Reveal on Scroll
        </h2>

        {cards.map((item, index) => (
          <motion.div
            key={item}
            className="mb-8 p-6 bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Animation triggers only the first time the element enters the viewport, Triggers 100px before element enters viewport
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">Card {item}</h3>
            <p className="text-gray-400">
              This card animates into view when you scroll to it. Each card has
              a slight delay for a staggered effect.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RevealOnScroll;
