import instructor from "@/assets/instructor.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Coffee } from "lucide-react";

const FooterSection = () => {
    return (
        <footer className="py-16 bg-coffee-dark text-cream">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Avatar class="w-10 h-10 border-2 border-amber-glow rounded-full">
                            <AvatarImage
                                src={instructor}
                                alt="Instructor"
                                className="w-full h-full rounded-full"
                            />
                            <AvatarFallback>
                                <Coffee className="w-5 h-5" />
                            </AvatarFallback>
                        </Avatar>
                        <span className="font-serif text-xl font-bold">
                            Coffee Lesson
                        </span>
                    </div>
                    <nav className="flex gap-8 font-sans text-sm text-cream/70">
                        <a
                            href="#learn"
                            className="hover:text-cream transition-colors"
                        >
                            Curriculum
                        </a>
                        <a
                            href="#pricing"
                            className="hover:text-cream transition-colors"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className="hover:text-cream transition-colors"
                        >
                            Contact
                        </a>
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
