import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <section>
        <div className="container mx-auto space-y-6 py-12 text-gray-700">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            About Us
          </h1>

          <p className="text-lg leading-relaxed">
            Adasa Moving & Transportation Inc., founded in 2023, is a
            family-owned business aiming to become a trusted name in
            Toronto&apos;s moving scene. We focus on building strong connections
            with our community, prioritizing personalized attention and
            reliability.
          </p>

          <p className="text-lg leading-relaxed">
            Our team is passionate about providing seamless, stress-free moves.
            With a commitment to professionalism and care, we strive to exceed
            your expectations in every relocation.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Our Journey
          </h2>
          <p className="text-lg leading-relaxed">
            Our journey began with a vision to revolutionize the moving
            industry. Fueled by personal experiences of unreliable services, our
            founders, M. Gun and D. Ozkan, started Adasa with a commitment to
            efficiency, care, and professionalism. Our goal is to set new
            standards in the moving process and achieve milestones like
            expanding our fleet and being recognized for exceptional customer
            service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Our Values
          </h2>
          <p className="text-lg leading-relaxed">
            At the heart of Adasa are our core values: reliability, care,
            professionalism, customer-centricity, integrity, innovation, and
            sustainability. These values drive us to deliver exceptional moving
            experiences, differentiating us through our dedication to
            stress-free relocations.
          </p>

          <p className="text-lg leading-relaxed">
            We offer more than just moving services; we provide a
            family-oriented experience where every client feels secure and cared
            for.
          </p>

          <p className="text-lg leading-relaxed">
            Our ultimate goal is to redefine moving in Toronto, offering
            personalized, reliable services that extend beyond mere assistance,
            ensuring comfort and assurance throughout your relocation journey.
          </p>
        </div>
        <Footer />
      </section>
    </>
  );
}
