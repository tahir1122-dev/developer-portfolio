"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-gray-200 rounded"></div>
});

const AnimationLottie = ({ animationPath, width = '100%', height = '100%' }) => {
  const [animationData, setAnimationData] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Load animation data
    if (animationPath) {
      import(`../../public/lottie/${animationPath}`)
        .then(module => setAnimationData(module.default))
        .catch(err => console.error('Failed to load animation:', err));
    }
  }, [animationPath]);

  if (!isClient || !animationData) {
    return <div className="w-full h-full animate-pulse bg-gray-200 rounded"></div>;
  }

  return (
    <Lottie
      animationData={animationData}
      style={{ width, height }}
      loop={true}
      autoplay={true}
    />
  );
};

export default AnimationLottie;