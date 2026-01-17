import { useParallax } from '@/hooks/useParallax';
import { Award, Trophy, Star, Lightbulb, BadgeCheck, X } from 'lucide-react';
import { useState } from 'react';

const awards = [
  {
    title: 'Best Employee Award',
    description: 'Recognized for exceptional performance and dedication in the workplace.',
    icon: Trophy,
    image: '/awards/p1.png',
  },
  {
    title: 'Guinness World Record',
    description: 'Holder of a Guinness World Record — a testament to extraordinary achievement.',
    icon: Award,
    image: '/awards/p4.png',
  },
  {
    title: 'Best Student Award',
    description: 'Honored for academic excellence and outstanding contributions.',
    icon: Star,
    image: '/awards/p2.png',
  },
  {
    title: 'Best Innovation Award',
    description: 'Awarded for creative problem-solving and innovative solutions.',
    icon: Lightbulb,
    image: '/awards/p3.png',
  },
];

const Awards = () => {
  const offset = useParallax(0.15);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="awards" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div
        className="absolute -left-32 top-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(var(--glow-secondary)) 0%, transparent 70%)',
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">

        {/* Title */}
        <span className="section-title block text-left">Recognition</span>
        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-left mt-6 mb-12 leading-snug"
          style={{ transform: `translateY(${offset * -0.03}px)` }}
        >
          Awa<span className="gradient-text">rds</span>
        </h2>

        {/* Awards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {awards.map((award, index) => (
            <div
              key={award.title}
              className="group relative flex flex-col sm:flex-row items-start sm:items-center 
                         gap-4 p-5 sm:p-6 rounded-2xl glass-card border border-white/10 
                         hover:border-primary/40 transition-all duration-500
                         hover:shadow-[0_0_40px_hsl(var(--primary)/0.35)]"
              style={{ transform: `translateY(${offset * (0.04 * index)}px)` }}
            >

              {/* Clickable Image */}
              <div
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 cursor-pointer"
                onClick={() => setSelectedImage(award.image)}
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <award.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {award.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 
                              bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl" />
            </div>
          ))}

        </div>

      </div>

      {/* IMAGE POPUP MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-[90%] max-h-[85%]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              className="rounded-xl shadow-2xl object-contain max-h-[85vh]"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-primary text-white rounded-full p-2 hover:scale-110 transition"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Awards;
