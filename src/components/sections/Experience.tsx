import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin, ChevronRight, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Assistant Professor",
    company: "Nandha Engineering College",
    period: "August 2025 - Present (6 months)",
    location: "Erode, Tamil Nadu, India",
    description:
      "Currently serving as an Assistant Professor, guiding students in Computer Science & Engineering with a focus on programming, problem-solving, and real-time application building.",
    current: true,
  },
  {
    title: "HR Manager",
    company: "TERV PRO",
    period: "November 2024 - July 2025 (9 months)",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Managed HR operations, employee engagement, recruitment, and organizational coordination across multiple technical teams.",
    current: false,
  },
  {
    title: "Team Lead",
    company: "TERV PRO",
    period: "April 2024 - July 2025 (1 year 4 months)",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Led technical teams, coordinated project execution, mentored trainees, and ensured delivery quality across multiple training programs.",
    current: false,
  },
  {
    title: "Scrum Master",
    company: "TERV PRO",
    period: "November 2023 - July 2025 (1 year 9 months)",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Facilitated agile ceremonies, improved team productivity, and ensured smooth sprint execution following Scrum best practices.",
    current: false,
  },
  {
    title: "Technical Trainer",
    company: "TERV PRO",
    period: "February 2023 - July 2025 (2 years 6 months)",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Delivered comprehensive technical training programs and mentored students in programming languages and software development practices.",
    current: false,
  },
  {
    title: "Visiting Professor",
    company: "Presidency University Bangalore",
    period: "July 2023 - December 2023 (6 months)",
    location: "Bangalore, India",
    description:
      "Delivered lectures on Problem Solving in C and improved completion rates by 30% through hands-on mentoring.",
    current: false,
  },
  {
    title: "Brand Ambassador",
    company: "Zaphire®",
    period: "January 2022 - November 2022 (11 months)",
    location: "Tamil Nadu, India",
    description:
      "Represented the brand, improved outreach and supported marketing engagement initiatives.",
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">

      {/* SAME CONTAINER AS ABOUT */}
      <div className="container mx-auto px-4 relative z-10 max-w-6xl" ref={ref}>

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
            Career Journey
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Professional <span className="gradient-text">Experience</span>
          </h1>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-10 gap-10">

          {/* LEFT TIMELINE */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block" />

            <div className="space-y-3">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left pl-10 pr-4 py-4 rounded-xl transition-all relative ${
                    activeIndex === index
                      ? "bg-primary/10 border border-primary/30"
                      : "hover:bg-secondary/50 border border-transparent"
                  }`}
                >
                  <div
                    className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 ${
                      activeIndex === index
                        ? "bg-primary border-primary"
                        : "bg-background border-muted-foreground/30"
                    }`}
                  />

                  {exp.current && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-0.5 text-[10px] font-bold bg-primary text-primary-foreground rounded-full">
                      Now
                    </span>
                  )}

                  <h4 className="font-semibold text-sm">{exp.company}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT DETAIL CARD */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)) 0%, transparent 70%)",
                }}
                animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Card */}
              <div className="relative card-elevated p-6 rounded-2xl border border-primary/20 backdrop-blur-xl shadow-lg hover:shadow-primary/30 hover:shadow-2xl transition-all duration-500">

                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <Briefcase className="text-primary-foreground" size={18} />
                </div>

                <h3 className="text-xl font-bold mb-1">
                  {experiences[activeIndex].title}
                </h3>

                <p className="text-primary font-semibold mb-4">
                  {experiences[activeIndex].company}
                </p>

                <div className="flex flex-wrap gap-3 mb-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {experiences[activeIndex].period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {experiences[activeIndex].location}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {experiences[activeIndex].description}
                </p>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
                  <button
                    onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                    disabled={activeIndex === 0}
                    className="flex items-center gap-1 text-sm disabled:opacity-30"
                  >
                    <ChevronRight className="rotate-180" size={14} />
                    Prev
                  </button>

                  <button
                    onClick={() =>
                      setActiveIndex(
                        Math.min(experiences.length - 1, activeIndex + 1)
                      )
                    }
                    disabled={activeIndex === experiences.length - 1}
                    className="flex items-center gap-1 text-sm disabled:opacity-30"
                  >
                    Next
                    <ChevronRight size={14} />
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
