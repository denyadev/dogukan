import About from "@/components/About";
import Bar from "@/components/Bar";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
    return (
        <section>
            <Hero />
            <Bar />
            <About />
            <Services />
            <Testimonials />
            <Contact />
        </section>
    );
}
