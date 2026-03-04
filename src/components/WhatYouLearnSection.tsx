import { motion } from "framer-motion";
import { Globe, Sprout, Coffee, Users } from "lucide-react";

const features = [
    {
        icon: Globe,
        title: "咖啡生產地",
        description:
            "唔同既地方都有唔同既氣候同土壤，會影響咖啡豆既味道。等我地帶你去南美、非洲同亞洲既咖啡產區旅行！",
    },
    {
        icon: Sprout,
        title: "第四波咖啡同可持續發展",
        description:
            "第三波咖啡浪潮注重風味，第四波咖啡係一個注重品質同可持續發展既運動。",
    },
    {
        icon: Coffee,
        title: "咖啡處理方法",
        description:
            "探索洗滌、自然和蜜餞處理——以及每種方法如何塑造你杯中的風味。",
    },
    {
        icon: Users,
        title: "品嚐與討論",
        description:
            "一起品嚐不同既咖啡，分享你既印象，發現你最喜歡既風味特徵。",
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
                        咖啡分享會內容
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        我地瘋狂嘅咖啡之旅會帶你去邊度？
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
