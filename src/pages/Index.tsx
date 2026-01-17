import CursorGlow from '@/components/CursorGlow';
import FloatingParticles from '@/components/FloatingParticles';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Awards from '@/components/sections/Awards';
import Quote from '@/components/sections/Quote';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorGlow />
      <FloatingParticles />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Awards />
        <Quote />
        <Contact />
      </main>

      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} B S Ranjith. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
