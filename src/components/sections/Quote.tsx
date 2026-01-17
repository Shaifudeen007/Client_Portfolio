import { useState } from "react";
import { useParallax } from "@/hooks/useParallax";
import { Quote as QuoteIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import q1 from "./q1.jpg";
import q2 from "./q2.jpg";
import q3 from "./q3.jpg";
import q4 from "./q4.jpg";
import q5 from "./q5.jpg";

const images = [q1, q2, q3, q4, q5];

const Quote = () => {
  const offset = useParallax(0.2);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--glow-secondary)) 100%)",
          transform: `translateY(${offset * 0.1}px)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Quote */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <QuoteIcon className="w-10 h-10 md:w-16 md:h-16 text-primary/30 mx-auto mb-6" />

          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            <span className="gradient-text">"A person lives by what he learns,</span>
            <br />
            <span className="text-muted-foreground">
              but becomes immortal by what he teaches."
            </span>
          </blockquote>
        </div>

        {/* Auto Scroll Gallery */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...images, ...images].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                onClick={() => setSelected(img)}
                whileHover={{ scale: 1.08 }}
                className="h-52 w-80 rounded-xl shadow-lg object-cover cursor-pointer"
                alt={`q${i + 1}`}
              />
            ))}
          </motion.div>
        </div>

      </div>

      {/* Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected}
                className="max-h-[80vh] rounded-2xl shadow-2xl"
                alt="popup"
              />

              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Quote;
