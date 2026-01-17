import { useParallax } from "@/hooks/useParallax";
import CountUp from "react-countup";
import { Briefcase, Users, Code2, Award } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { icon: Briefcase, value: 300, label: "Trainers Shaped" },
  { icon: Users, value: 7000, label: "Students Guided" },
  { icon: Code2, label: "Versatile. Adaptable. Leadership-Driven." },
  { icon: Award, label: "Credentialed Tech Lead" },
];

const coreSkills = [
  "Computer Science",
  "Problem Solving",
  "Team Leadership",
  "Scrum Methodology",
  "Technical Training",
  "Management",
  "C Programming",
  "Java",
];

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const offset = useParallax(isMobile ? 0 : 0.2);

  return (
    <section
      id="about"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">

        <span className="section-title">About Me</span>

        <h2
          className="text-4xl md:text-5xl font-bold mt-4 mb-5"
          style={{ transform: `translateY(${offset * -0.1}px)` }}
        >
          Educator. Leader. <span className="gradient-text">Innovator.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT CONTENT */}
          <div
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            style={{ transform: `translateY(${offset * -0.05}px)` }}
          >
            <p>
              I'm A Dedicated Educator And Tech Lead Currently Serving As An
              Assistant Professor At Nandha Engineering College. My Journey In Tech
              Spans Across Multiple Roles - From Being A Technical Trainer To Scrum
              Master And HR Manager.
            </p>

            <p>
              With A Strong Foundation In Computer Science And An MBA, I Bridge The
              Gap Between Technical Expertise And Business Acumen. I've Helped Improve
              Course Completion Rates By 30% Through Mentorship And Innovative Teaching
              Methodologies.
            </p>

            <p>
              My Passion Lies In Guiding The Next Generation Of Developers, Instilling
              In Them Not Just Technical Skills But Also Problem-Solving Abilities And
              A Growth Mindset.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-10">

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div key={stat.label} className="stat-box">
                    <Icon className="w-8 h-8 text-primary mb-2" />

                    {typeof stat.value === "number" && (
                      <div className="text-3xl font-bold gradient-text">
                        <CountUp
                          end={stat.value}
                          duration={2}
                          enableScrollSpy
                          scrollSpyOnce
                        />+
                      </div>
                    )}

                    <p className="text-sm text-muted-foreground mt-1 text-center">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
