import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();

  // Food items for the morphing animation
  const foodItems = [
    {
      name: 'Hot Pizza',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=800&fit=crop&crop=center',
      alt: 'Delicious hot pizza'
    },
    {
      name: 'Fresh Pasta',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=800&fit=crop&crop=center',
      alt: 'Fresh homemad