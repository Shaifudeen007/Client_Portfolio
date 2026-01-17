import { useParallax } from "@/hooks/useParallax";
import { Mail, Linkedin, Instagram, MapPin, Send } from "lucide-react";

const Contact = () => {
  const offset = useParallax(0.15);

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "ranjithbs61@gmail.com",
      href: "mailto:ranjithbs61@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ranjithbs14",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "Follow me",
      href: "https://www.instagram.com/ranjith_bs_14",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Glow */}
      <div
        className="absolute right-0 top-0 w-[480px] h-[480px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <div>
            <span className="section-title block mb-3">GET IN TOUCH</span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-10 max-w-xl">
              Whether you're interested in collaboration, speaking engagements,
              or just want to say hello, I'd love to hear from you.
            </p>

            {/* CONTACT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="contact-card flex items-center gap-4 w-full h-[82px]"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="flex flex-col justify-center leading-tight">
                    <span className="font-semibold">{link.label}</span>
                    <span className="text-sm text-muted-foreground">
                      {link.value}
                    </span>
                  </div>
                </a>
              ))}

              {/* LOCATION */}
              <div className="contact-card flex items-center gap-4 w-full h-[82px] sm:col-span-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>

                <div className="flex flex-col justify-center leading-tight">
                  <span className="font-semibold">Location</span>
                  <span className="text-sm text-muted-foreground">
                    Bhavani, Tamil Nadu, India
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM WITH GLOW */}
          <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-primary via-yellow-400 to-primary animate-pulse">

            <div className="glass-card p-8 rounded-xl shadow-lg bg-background">
              <h3 className="text-xl font-semibold text-center mb-6 gradient-text">
                Send me a message
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border bg-background/50 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <button
                  type="submit"
                  className="hero-button w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
