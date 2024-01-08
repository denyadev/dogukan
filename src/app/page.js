import About from "@/components/About";
import Bar from "@/components/Bar";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section>
      <Hero />
      <Bar />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </section>
  );
}
