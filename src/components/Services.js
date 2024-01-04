import { Button } from "./ui/button"; // Ensure this path is correct for your Button component
import Image from "next/image"; // Ensure to import the Image component
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Services() {
  const features = [
    {
      title: "Trusted Professionals",
      description:
        "Over 15 years of experience in the moving industry. A team of skilled movers dedicated to your satisfaction.",
    },
    {
      title: "Accurate Estimates/No Hidden Fees",
      description:
        "Our owners are directly involved in every aspect of the business, ensuring accurate estimates with no hidden fees.",
    },
    {
      title: "Hands-On Ownership",
      description:
        "Our owners are directly involved in every aspect of the business, ensuring accountability, dedication, and attention to detail.",
    },
    {
      title: "Licensed and Insured",
      description:
        "We are fully licensed and insured, taking full responsibility for the safety of your items.",
    },
    {
      title: "Safety Priority",
      description:
        "Safety is emphasized in every step of our moving process, protecting your belongings and our team.",
    },
    {
      title: "Commitment to Values",
      description:
        "Our family values of strong work ethic, honesty, and integrity are reflected in every aspect of our service.",
    },
    {
      title: "Customized Solutions",
      description:
        "We offer tailored services to meet your individual moving needs, ensuring a personalized experience.",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "Your comfort and peace of mind are our top priorities throughout the moving process.",
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center underline decoration-orange-500 uppercase">
          Our Services
        </h2>

        {/* Services List */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Service Cards */}
          {[
            {
              img: "/services/local.jpg",
              title: "Local and Long-Distance Moves",
              url: "local-moves",
              description:
                "From local transitions to long-distance relocations, trust us to handle every aspect of your move with precision and care. We offer affordable solutions for students and seniors.",
            },
            {
              img: "/services/commercial.jpg",
              title: "Commercial Moves ",
              url: "long-distance-moves",
              description:
                "We cater to both residential and commercial clients, offering tailored solutions to meet your unique moving needs.",
            },
            {
              img: "/services/fullpacking.webp",
              title: "Full Packing and Unpacking",
              url: "long-distance-moves",
              description:
                "Save time and energy with our expert packing and unpacking services. Our team will carefully pack all your belongings using high-quality materials, ensuring they reach their destination in perfect condition. We offer affordable packing solutions for students and seniors.",
            },
            {
              img: "/services/specialty.jpg",
              title: "Speacialty Moves",
              url: "long-distance-moves",
              description:
                "Need to transport delicate items, valuable artwork, or heavy furniture? Our specialized moving services have you covered.",
            },
            {
              img: "/services/disposal.webp",
              title: "Disposal of Unwanted Items",
              url: "long-distance-moves",
              description:
                "Simplify your move by letting us handle the disposal of unwanted items. From old furniture to electronics, we can responsibly dispose of or donate items you no longer need, reducing the stress of decluttering before your move.",
            },
            {
              img: "/services/rates.jpg",
              title: "Affordable Rates",
              url: "long-distance-moves",
              description:
                "Whether you're a student moving to a new apartment or a senior downsizing to a smaller home, we've got you covered with our special rates. Call now to book your move.",
            },
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <Image
                  src={service.img}
                  width={400}
                  height={250}
                  alt={service.title}
                  className="w-full object-cover object-center"
                />
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={service.url}>
                  <Button
                    variant="outline"
                    className="border-2 border-orange-500 hover:border-orange-600 hover:text-orange-600 text-gray-800 py-2 px-4 transition-colors duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center underline decoration-orange-500 uppercase">
            Why Choose Adanian Way Transportation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <ServiceFeature
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          <Button
            size="lg"
            className="hover:bg-orange-400 hover:border-orange-700 hover:scale-105 transition transform mt-12"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

const ServiceFeature = ({ title, description }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
