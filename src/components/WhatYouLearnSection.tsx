import { motion } from "framer-motion";
import { Globe, Sprout, Coffee, Users } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Origin of Coffee",
    description: "Trace coffee's journey from its legendary discovery in Ethiopia to the global phenomenon it is today.",
  },
  {
    icon: Sprout,
    title: "From Farm to Cup",
    description: "Learn how coffee cherries are harvested, processed, and dried before they ever reach a roaster.",
  },
  {
    icon: Coffee,
    title: "Coffee Processing Methods",
    description: "Explore washed, natural, and honey processing — and how each method shapes the flavour in your cup.",
  },
  {
    icon: Users,
    title: "Tasting & Discussion",
    description: "Sample different coffees together, share your impressions, and discover what flavour profiles you enjoy most.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhatYouLearnSection = () => {
  return (
    <section id="learn" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            What We'll Cover
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            An Afternoon with Coffee
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
