import { Coffee } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-coffee-dark text-cream">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Coffee className="w-6 h-6 text-amber-glow" />
            <span className="font-serif text-xl font-bold">Coffee Lesson</span>
          </div>
          <nav className="flex gap-8 font-sans text-sm text-cream/70">
            <a href="#learn" className="hover:text-cream transition-colors">Curriculum</a>
            <a href="#pricing" className="hover:text-cream transition-colors">Pricing</a>
            <a href="#" className="hover:text-cream transition-colors">Contact</a>
          </nav>
          <p className="font-sans text-sm text-cream/50">
            © 2026 Coffee Lesson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
