import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div 
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;