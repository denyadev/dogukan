import Image from "next/image"; // Ensure to import the Image component
import { Button } from "./ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="flex-1 z-10 mb-6 lg:mb-0">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10  underline decoration-orange-500 uppercase text-center lg:text-left">
            About Us
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-6">
            <p className="text-gray-600 text-lg mb-4">
              Adanian Way Transportation, a new family-owned and operated
              business, have 15 years of experience delivering full service
              residential moving throughout Toronto and the Greater Toronto Area
              (GTA)
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Our core values—reliability, care, professionalism,
              customer-centricity, integrity, innovation, and
              sustainability—fuel our commitment to delivering exceptional
              moving experiences. What sets us apart is our unwavering
              dedication to ensuring stress-free relocations for every client,
              backed by our values-driven approach.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Offering more than just moving services; it is about providing a
              family-oriented experience, ensuring each client feels secure and
              cared for during their relocation.
            </p>
            <Link href="/about">
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 lg:block">
          <Image
            src="/1.avif" // Replace with your image path
            width={1200}
            height={1200}
            objectFit="cover"
            alt="About Us"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
