"use client";

import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const AnimationLottie = ({ animationPath, width = '100%', height = '100%' }) => {
  const containerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Dynamically import the lottie animation data
    const loadAnimation = async () => {
      try {
        const response = await fetch(animationPath);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Failed to load animation:', error);
      }
    };

    loadAnimation();
  }, [animationPath]);

  useEffect(() => {
    if (!animationData || !containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animation.destroy();
    };
  }, [animationData]);

  return (
    <div
      ref={containerRef}
      style={{ width, height }}
      className="animation-container"
    />
  );
};

export default AnimationLottie;