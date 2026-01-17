import { useParallax } from '@/hooks/useParallax';
import { Mail, Linkedin, Instagram, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const offset = useParallax(0.15);

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ranjithbs61@gmail.com',
      href: 'mailto:ranjithbs61@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/ranjithbs14',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'Follow me',
      href: 'https://www.instagram.com/ranjith_bs_14',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div 
        className="absolute right-0 top-0 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] rounded-full opacity-10"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />
      <div 
        className="absolute -left-32 bottom-0 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] rounded-full opacity-10"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--glow-secondary)) 0%, transparent 70%)',
          transform: `translateY(${offset * 0.2}px)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <span className="section-title">Get in Touch</span>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-4 mb-6 md:mb-8"
            style={{ transform: `translateY(${offset * -0.1}px)` }}
          >
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-12 max-w-2xl">
            Whether you're interested in collaboration, speaking engagements, or just 
            want to say hello, I'd love to hear from you.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-card"
                style={{ transform: `translateY(${offset * (0.03 * index)}px)` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <link.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm md:text-base">{link.label}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{link.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <div>
                <div className="font-semibold text-foreground text-sm md:text-base">Location</div>
                <div className="text-muted-foreground text-xs md:text-sm">Bhavani, Tamil Nadu, India</div>
              </div>
            </div>

            <a href="mailto:ranjithbs61@gmail.com" className="hero-button inline-flex items-center gap-2 text-sm md:text-base">
              <Send className="w-4 h-4 md:w-5 md:h-5" />
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
