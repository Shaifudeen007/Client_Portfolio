import { useParallax } from '@/hooks/useParallax';

const ProfilePhoto = () => {
  const offset = useParallax(0.2);

  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ transform: `translateY(${offset * -0.1}px)` }}
    >
      {/* Outer glow rings */}
      <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full animate-pulse" style={{ 
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
      }} />
      <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full" style={{ 
        background: 'radial-gradient(circle, hsl(var(--glow-secondary) / 0.2) 0%, transparent 60%)',
      }} />
      
      {/* Rotating border ring */}
      <div className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full animate-spin-slow" style={{
        background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--glow-secondary)), hsl(var(--primary)))',
        animationDuration: '8s',
      }} />
      
      {/* Inner background */}
      <div className="absolute w-[184px] h-[184px] sm:w-[216px] sm:h-[216px] md:w-[248px] md:h-[248px] lg:w-[280px] lg:h-[280px] rounded-full bg-background" />
      
      {/* Photo frame */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-68 lg:h-68 rounded-full overflow-hidden border-4 border-primary/50">
        {/* Placeholder with initials */}
        <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">BSR</span>
        </div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
      </div>
      
      {/* Floating accent dots */}
      <div className="absolute top-4 right-8 w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-8 left-4 w-2 h-2 rounded-full bg-glow-secondary animate-bounce" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default ProfilePhoto;
