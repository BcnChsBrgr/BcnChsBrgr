import { motion } from "framer-motion";
import heroCoffee from "@/assets/hero-coffee.jpg";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCoffee}
          alt="Latte art being poured into a ceramic cup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-coffee-dark/70" />
      </div>

      <div className="container relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-amber-glow font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Coffee Sharing Session
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream leading-tight mb-6">
            Discover the
            <span className="block italic text-amber-glow">World of Coffee</span>
          </h1>
          <p className="text-cream/80 font-sans text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Join us for a relaxed afternoon exploring the fascinating origins of coffee and the journey from bean to cup.
          </p>

          <div className="flex flex-wrap gap-6 text-cream/90 font-sans text-sm mb-10">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-amber-glow" />
              18 April 2026
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-glow" />
              3:00 PM
            </div>
            <div className="flex items-center gap-2 bg-accent/20 px-3 py-1 rounded-full font-semibold text-amber-glow">
              £10 / person
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-sans font-semibold rounded-lg hover:brightness-110 transition-all"
            >
              Reserve Your Spot
            </a>
            <a
              href="#learn"
              className="inline-flex items-center justify-center px-8 py-4 border border-cream/30 text-cream font-sans font-medium rounded-lg hover:bg-cream/10 transition-all"
            >
              What We'll Cover
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
