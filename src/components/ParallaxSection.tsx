import { useParallax } from '@/hooks/useParallax';
import { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection = ({ children, speed = 0.3, className = '' }: ParallaxSectionProps) => {
  const offset = useParallax(speed);

  return (
    <div
      className={`relative ${className}`}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
