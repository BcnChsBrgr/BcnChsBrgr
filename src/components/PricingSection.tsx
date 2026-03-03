import { motion } from "framer-motion";
import { CalendarDays, Clock, Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Join Us
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Reserve Your Spot
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="relative bg-primary text-primary-foreground p-10 rounded-2xl border border-primary shadow-2xl text-center">
            <h3 className="text-2xl font-serif font-semibold mb-2">Coffee Sharing Session</h3>
            <div className="flex justify-center gap-6 text-sm font-sans text-primary-foreground/70 mb-6">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" /> 18 Apr 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 3:00 PM
              </span>
            </div>
            <p className="text-5xl font-serif font-bold mb-1">£10</p>
            <p className="text-primary-foreground/60 font-sans text-sm mb-8">per person</p>

            <ul className="text-left space-y-3 mb-10">
              {[
                "Origin of coffee — history & culture",
                "Coffee processing methods explained",
                "Guided tasting of different coffees",
                "Open discussion & Q&A",
                "Light refreshments included",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-sans">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block w-full text-center py-4 rounded-lg bg-accent text-accent-foreground font-sans font-semibold hover:brightness-110 transition-all"
            >
              Book Now — £10
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
