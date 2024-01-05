import Link from "next/link";

export default function Component() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Us
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Adasa Moving and Transportation, a recently established
                family-owned and operated business, proudly presents a rich
                15-year history specializing in local moving services across
                Toronto and the Greater Toronto Area (GTA)
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our core values—reliability, care, professionalism,
                customer-centricity, integrity, innovation, and
                sustainability—fuel our commitment to delivering exceptional
                moving experiences. What sets us apart is our unwavering
                dedication to ensuring stress-free relocations for every client,
                backed by our values-driven approach.
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Offering more than just moving services; it is about providing a
                family-oriented experience, ensuring each client feels secure
                and cared for during their relocation.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-orange-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-600 disabled:pointer-events-none disabled:opacity-50"
                href="/about"
              >
                Learn More
              </Link>
            </div>
          </div>
          <img
            alt="About Us"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/1.avif"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}
