import React, { useState } from "react";
import BackgroundChaos from "../components/Home/BackgroundChaos";
import AnimatedTitle from "../components/Home/AnimatedTitle";
import ChaosShape from "../components/Home/ChaosShape";
import ExplosionParticles from "../components/Home/ExplosionParticles";
import PulsatingText from "../components/Home/PulsatingText";
import EmojiRain from "../components/Home/EmojiRain";
import { motion } from "motion/react";

/**
 * HomePage Component
 *
 * The main landing page that showcases motion animations with a chaotic, energetic theme.
 * Combines multiple animated components to create an immersive interactive experience.
 *
 * Features:
 * - Interactive chaos shape that toggles explosion mode
 * - Background particle effects
 * - Animated title with scaling and color effects
 * - Falling emoji rain animation
 * - Explosion particle effects on interaction
 * - Responsive gradient background
 *
 * Component Structure:
 * - BackgroundChaos: Floating background particles
 * - AnimatedTitle: Main title with scaling and color effects
 * - ChaosShape: Interactive central element with orbiting satellites
 * - ExplosionParticles: Colorful particle explosion on click
 * - PulsatingText: Instructional text with breathing animation
 * - EmojiRain: Continuous falling emoji animation
 */
const HomePage: React.FC = () => {
  const [isExploding, setIsExploding] = useState(false);

  const handleShapeClick = () => {
    setIsExploding(!isExploding);
  };
  return (
    <motion.div
      className="min-h-dvh bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Background chaos elements */}
      <BackgroundChaos />

      {/* Title with crazy animations */}
      <AnimatedTitle isExploding={isExploding} />

      {/* Main chaotic element */}
      <ChaosShape isExploding={isExploding} onClick={handleShapeClick} />

      {/* Explosion particles */}
      <ExplosionParticles isVisible={isExploding} />

      {/* Pulsating text */}
      <PulsatingText />

      {/* Floating emoji rain */}
      <EmojiRain />
    </motion.div>
  );
};

export default HomePage;
