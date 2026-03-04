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
                        咖啡分享會
                    </p>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream leading-tight mb-6">
                        探索咖啡世界嘅秘密同樂趣，加入我地既
                        <span className="block italic text-amber-glow">
                            瘋狂嘅咖啡之旅
                        </span>
                    </h1>
                    <p className="text-cream/80 font-sans text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                        一個專為咖啡愛好者而設既分享會，無論你係新手定係老饕，都可以一齊嚟品嚐、學習同交流。
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
                        <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-amber-glow" />
                            <span>
                                風林火山 Furinkazan, 120 Brent St, London NW4
                                2DT
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://api.whatsapp.com/send/?phone=4407395222543"
                            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-sans font-semibold rounded-lg hover:brightness-110 transition-all"
                        >
                            再黎一齊飲咖啡啦！
                        </a>
                        <a
                            href="#learn"
                            className="inline-flex items-center justify-center px-8 py-4 border border-cream/30 text-cream font-sans font-medium rounded-lg hover:bg-cream/10 transition-all"
                        >
                            我地會講咩？
                        </a>
                        <a
                            href="https://maps.app.goo.gl/TvN2JJxe2jPLYhwU7"
                            className="inline-flex items-center justify-center px-8 py-4 border border-cream/30 text-cream font-sans font-medium rounded-lg hover:bg-cream/10 transition-all"
                        >
                            地點係邊？
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
