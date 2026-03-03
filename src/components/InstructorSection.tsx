import { motion } from "framer-motion";
import instructorImg from "@/assets/instructor.jpg";

const InstructorSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={instructorImg}
                alt="Your coffee instructor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl font-sans font-semibold shadow-lg">
              10+ Years Experience
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Your Instructor
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Meet Your Guide to Coffee Mastery
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-6">
              With over a decade of experience in specialty coffee, our instructor has trained baristas worldwide and competed in national championships. Their passion for coffee is infectious — and they're here to share it with you.
            </p>
            <ul className="space-y-3 font-sans text-foreground">
              {["Certified Q Grader", "National Barista Champion", "Trained 500+ students", "Featured in Coffee Magazine"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
