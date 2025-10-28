"use client";

import { useEffect, useRef, useState } from 'react';

const AnimationLottie = ({ animationPath, width = '100%', height = '100%' }) => {
  const containerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);
  const [lottie, setLottie] = useState(null);

  useEffect(() => {
    // Dynamically import lottie-web only on client side
    const loadLottie = async () => {
      try {
        const lottieModule = await import('lottie-web');
        setLottie(lottieModule.default);
      } catch (error) {
        console.error('Failed to load lottie-web:', error);
      }
    };

    loadLottie();
  }, []);

  useEffect(() => {
    // Handle both JSON object and string path
    const loadAnimation = async () => {
      try {
        if (typeof animationPath === 'object') {
          // If animationPath is already a JSON object
          setAnimationData(animationPath);
        } else {
          // If animationPath is a string, fetch the data
          const response = await fetch(animationPath);
          const data = await response.json();
          setAnimationData(data);
        }
      } catch (error) {
        console.error('Failed to load animation:', error);
      }
    };

    loadAnimation();
  }, [animationPath]);

  useEffect(() => {
    if (!animationData || !containerRef.current || !lottie) return;

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
  }, [animationData, lottie]);

  return (
    <div
      ref={containerRef}
      style={{ width, height }}
      className="animation-container"
    />
  );
};

export default AnimationLottie;