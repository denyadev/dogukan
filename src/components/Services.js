import { Button } from "./ui/button"; // Ensure this path is correct for your Button component
import Image from "next/image"; // Ensure to import the Image component
import Link from "next/link";

export default function Services() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center underline decoration-orange-500">
                    Services Offered
                </h2>

                {/* Services List */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Service Cards */}
                    {[
                        {
                            img: "/local.avif",
                            title: "Local Moves",
                            url: "local-moves",
                            description:
                                "Efficient and hassle-free relocation within the area.",
                        },
                        {
                            img: "/long.avif",
                            title: "Long-Distance Moves",
                            url: "long-distance-moves",
                            description:
                                "Reliable transport and delivery across regions.",
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
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {service.description}
                                </p>
                                <Link href={service.url}>
                                    <Button
                                        variant="outline"
                                        className="border-2 border-orange-500 hover:border-orange-600 hover:text-orange-600 text-gray-800 py-2 px-4 transition-colors duration-300"
                                    >
                                        Learn More
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
