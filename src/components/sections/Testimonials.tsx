import { useParallax } from '@/hooks/useParallax';
import { Linkedin, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dhanush Kumar',
    role: 'LTIMindtree Interview Journey',
    text:
      'Though I was not selected in the final HR round, the 4-month interview journey improved my confidence, communication, and mindset. Grateful to my mentor B S Ranjith for constant guidance.',
    link:
      'https://www.linkedin.com/posts/dhanushkumar04_interviewexperience-placementjourney-hrinterview-activity-7411090033266364416-Il7n',
  },
  {
    name: 'Harini Arumugam',
    role: 'LTIMindtree Placement',
    text:
      '4 rounds, 54 days, countless revisions. Consistency and patience helped me achieve my LTIMindtree offer. Special thanks to my mentor B S Ranjith.',
    link:
      'https://www.linkedin.com/posts/harini-arumugam-4568042a3_proud-to-share-my-ltimindtree-placement-activity-7406653999409557504-Gzqt',
  },
  {
    name: 'Saran',
    role: 'Placement Success Story',
    text:
      'Projects, patience, and consistency were the key. My interview journey taught me that the right opportunity comes when you stay consistent.',
    link:
      'https://www.linkedin.com/posts/saran2701_one-unexpected-twist-changed-everything-ugcPost-7401250057427017728-kbtD',
  },
  {
    name: 'Mohammed Aadhil',
    role: 'Avasoft Interview Experience',
    text:
      'This interview process taught me to justify every skill and think logically. Thankful to my placement trainer Mr. B S Ranjith.',
    link:
      'https://www.linkedin.com/posts/mohammedaadhil1304_avasoft-interview-interviewexperience-activity-7372298280074072065-1p0t',
  },
  {
    name: 'Yogeshwaran D',
    role: 'Java & DSA Training',
    text:
      'Trainer B S Ranjith explained DSA concepts clearly and helped me implement them in real projects. The confidence I gained is priceless.',
    link:
      'https://www.linkedin.com/posts/yogeshwaran-d_github-yogeshcoder9865atmproject-activity-7331933103688441856-8zNe',
  },
  {
    name: 'Tharvesh',
    role: 'Java & DSA Learning',
    text:
      'I gained strong DSA knowledge using Java and implemented it in projects. Thankful to my trainer B S Ranjith for his valuable interview tips.',
    link:
      'https://lnkd.in/gqpNssAu',
  },
  {
    name: 'Guhan G',
    role: 'Java Programming Training',
    text:
      'The Java and DSA training was highly practical and motivating. Complex topics were explained in a simple and engaging manner.',
    link:
      'https://www.linkedin.com/posts/guhan-g-17509530a_github-g-guhan5java-quizapp-activity-7332051653287628800-Szx4',
  },
  {
    name: 'Yogeshwaran D',
    role: 'Trainer Appreciation',
    text:
      'Very impressive Java trainer. Not just teaching code, but building confidence and problem-solving mindset in students.',
    link:
      'https://www.linkedin.com/posts/ranjithbs14_gratitude-javatrainer-lifeatterv-activity-7332009791407468544-tf49',
  },
];


const Testimonials = () => {
  const offset = useParallax(0.15);

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
    >
      {/* Glow Background */}
      <div
        className="absolute -right-40 top-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--glow-primary)) 0%, transparent 70%)',
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">

        {/* Title */}
        <span className="section-title block text-left">
          Testimonials
        </span>

        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-left mt-6 mb-12 leading-snug"
          style={{ transform: `translateY(${offset * -0.03}px)` }}
        >
          Student <span className="gradient-text">Voices</span>
        </h2>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl glass-card border border-white/10 
                         hover:border-primary/40 transition-all duration-500
                         hover:shadow-[0_0_40px_hsl(var(--primary)/0.35)]"
              style={{
                transform: `translateY(${offset * (0.04 * index)}px)`,
              }}
            >

              {/* Header */}
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.role}
                </p>
              </div>

              {/* Quote */}
              <div className="relative pl-6">
                <Quote className="absolute left-0 top-1 text-primary w-4 h-4" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Link */}
              <a
                href={item.link}
                target="_blank"
                className="mt-2 inline-flex items-center gap-2 text-primary text-sm hover:underline"
              >
                <Linkedin size={16} />
                View LinkedIn Post
              </a>

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 
                           transition-opacity duration-500 
                           bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
