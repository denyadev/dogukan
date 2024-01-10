import About from "@/components/About";
import Bar from "@/components/Bar";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Home() {
    return (
        <>
            {/* Load the gtag.js library */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-11467367917"
                strategy="afterInteractive"
                async
            />
            {/* Initialize and configure gtag.js */}
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11467367917');
          `,
                }}
            />
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
        </>
    );
}
