const Logo = () => {
  return (
    <a href="#" className="flex items-center gap-3 group">
      {/* Creative Logo Mark */}
      <div className="relative w-10 h-10 md:w-12 md:h-12">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-glow-secondary to-primary opacity-60 blur-sm group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Main logo container */}
        <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary to-glow-secondary p-[2px]">
          <div className="w-full h-full rounded-[10px] bg-background flex items-center justify-center">
            {/* Letter inside */}
            <span className="text-lg md:text-xl font-bold gradient-text font-sans">R</span>
          </div>
        </div>
        
        {/* Decorative dots */}
        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary opacity-80 group-hover:scale-125 transition-transform duration-300" />
        <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 rounded-full bg-glow-secondary opacity-60 group-hover:scale-125 transition-transform duration-300" />
      </div>
      
      {/* Brand name */}
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-bold gradient-text tracking-wide">BSR</span>
        <span className="text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase -mt-1 hidden sm:block">Portfolio</span>
      </div>
    </a>
  );
};

export default Logo;
