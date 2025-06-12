import React from "react";
import { motion } from "motion/react";

/**
 * StaggeredGrid Component
 *
 * Demonstrates staggered grid animations using variants and parent-child coordination.
 * Features:
 * - Grid layout with 12 numbered items
 * - Parent variants control overall animation timing
 * - Child variants define individual item animations
 * - Staggered delay between children (0.1s increment)
 * - Scale, opacity, and position animations combined
 * - One-time animation with viewport margin for early trigger
 *
 * @example
 * <StaggeredGrid />
 */
const StaggeredGrid: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-green-100 py-20">
      <div className="container mx-auto px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Staggered Grid
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {[...Array(12)].map((_, index) => (
            <motion.div
              key={index}
              className="h-24 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              {index + 1}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StaggeredGrid;
