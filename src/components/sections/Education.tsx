import { useParallax } from '@/hooks/useParallax';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Master of Business Administration (MBA)',
    field: 'Business Administration',
    institution: 'Excel Engineering College (Autonomous)',
    number: '01',
  },
  {
    degree: 'Master of Engineering (MEng)',
    field: 'Computer Science',
    institution: 'Hindusthan College of Engineering and Technology',
    number: '02',
  },
  {
    degree: 'Bachelor of Technology (BTech)',
    field: 'Information Technology',
    institution: 'KSR Institute for Engineering and Technology, Namakkal',
    number: '03',
  },
];

const Education = () => {
  const offset = useParallax(0.15);

  const isDesktop =
    typeof window !== 'undefined' && window.innerWidth >= 640;

  return (
    <section id="education" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">

      <div 
        className="absolute right-0 top-1/4 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] rounded-full opacity-10"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Academic Background */}
          <span className="section-title block mt-0 sm:-mt-2">
            Academic Background
          </span>

          {/* Education & Qualifications */}
          <h2 
            className="
              text-2xl 
              sm:text-4xl 
              md:text-5xl 
              font-bold 
              mt-4 sm:mt-8 md:mt-10
              mb-8 md:mb-16
              leading-tight
            "
            style={{
              transform: isDesktop
                ? `translateY(${offset * -0.1}px)`
                : 'none'
            }}
          >
            Education & <span className="gradient-text">Qualifications</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className="education-card group"
                style={{ transform: `translateY(${offset * (0.05 * index)}px)` }}
              >
                <div className="absolute top-4 md:top-6 right-4 md:right-6 text-4xl md:text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {edu.number}
                </div>
                
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                    <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {edu.degree}
                  </h3>

                  <p className="text-primary font-medium mb-3">
                    {edu.field}
                  </p>

                  <p className="text-muted-foreground text-sm">
                    {edu.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
