import { useMousePosition } from '@/hooks/useMousePosition';

const FloatingParticles = () => {
  const { x, y } = useMousePosition();

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
    left: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            transform: `translate(${(x - window.innerWidth / 2) * 0.01}px, ${(y - window.innerHeight / 2) * 0.01}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
