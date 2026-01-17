import { useParallax } from "@/hooks/useParallax";
import { Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const offset = useParallax(0.4);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative md:min-h-screen flex md:items-center overflow-hidden pt-24 pb-16 md:pt-0 md:pb-0">
      {/* Background gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 md:w-[500px] h-80 md:h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--glow-secondary)) 0%, transparent 70%)",
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">

          {/* Left content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <p className="text-muted-foreground text-base md:text-lg mb-3 md:mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hello, I'm
            </p>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 opacity-0 animate-fade-in-up"
              style={{
                animationDelay: "0.4s",
                transform: `translateY(${offset * -0.2}px)`,
              }}
            >
              <span className="gradient-text">B S Ranjith</span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-6 md:mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {["Assistant Professor", "Technical Trainer", "Scrum Master"].map(
                (role) => (
                  <span key={role} className="skill-tag text-xs sm:text-sm">
                    {role}
                  </span>
                )
              )}
            </div>

            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8 md:mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              Passionate Educator And Tech Lead With Expertise In Computer
              Science, Guiding Students In Programming, Problem-Solving, And
              Real-Time Application Building. Based In Tamil Nadu, India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <a
                href="mailto:ranjithbs61@gmail.com"
                className="hero-button flex items-center gap-2 w-full sm:w-auto justify-center text-sm md:text-base"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                Get in Touch
              </a>
              <button
                onClick={scrollToAbout}
                className="outline-button w-full sm:w-auto text-sm md:text-base"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-shrink-0 opacity-0 animate-scale-in flex items-center justify-center" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl"></div>

              <div className="relative w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img
                  src="/ProfilePhoto.jpg"
                  alt="B S Ranjith"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in cursor-pointer"
        style={{ animationDelay: "1.5s" }}
      >
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-primary animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
