import { Button } from "./ui/button"; // Ensure this path is correct for your Button component
import Image from "next/image"; // Ensure to import the Image component

export default function Services() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center underline decoration-orange-500">
                    Exceptional Moving Services
                </h2>

                {/* Services List */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Service Cards */}
                    {[
                        {
                            img: "/local.avif",
                            title: "Local Moves",
                            description:
                                "Efficient, hassle-free relocation within your local area, ensuring the safety and security of your belongings.",
                        },
                        {
                            img: "/long.avif",
                            title: "Long-Distance Moves",
                            description:
                                "Reliable and secure long-distance transport, with comprehensive planning and continuous communication.",
                        },
                        {
                            img: "/special.avif",
                            title: "Specialty Moves",
                            description:
                                "Handling delicate or specialized items with utmost care, including pianos, artwork, and heavy furniture.",
                        },
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                        >
                            <Image
                                src={service.img}
                                width={400}
                                height={250}
                                alt={service.title}
                                className="w-full object-cover object-center"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {service.description}
                                </p>
                                <Button
                                    variant="outline"
                                    className="border-2 border-orange-500 hover:border-orange-600 hover:text-orange-600 text-gray-800 py-2 px-4 transition-colors duration-300"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
