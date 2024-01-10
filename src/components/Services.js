import {
    CardTitle,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button"; // Ensure this path is correct for your Button component
import Image from "next/image"; // Ensure to import the Image component

const services = [
    {
        img: "/services/local.png",
        title: "Local and Long-Distance Moves",
        url: "local-moves",
        description:
            "From local transitions to long-distance relocations, trust us to handle every aspect of your move with precision and care. We offer affordable solutions for students and seniors.",
    },
    {
        img: "/services/commercial.png",
        title: "Commercial Moves",
        url: "commercial-moves",
        description:
            "We cater to both residential and commercial clients, offering tailored solutions to meet your unique moving needs.",
    },
    {
        img: "/services/fullpacking.png",
        title: "Full Packing and Unpacking",
        url: "long-distance-moves",
        description:
            "Save time and energy with our expert packing and unpacking services. Our team will carefully pack all your belongings using high-quality materials, ensuring they reach their destination in perfect condition. We offer affordable packing solutions for students and seniors.",
    },
    {
        img: "/services/specialty.png",
        title: "Specialty Moves",
        url: "specialty-moves",
        description:
            "Need to transport delicate items, valuable artwork, or heavy furniture? Our specialized moving services have you covered.",
    },
    {
        img: "/services/disposal.png",
        title: "Disposal of Unwanted Items",
        url: "disposal",
        description:
            "Simplify your move by letting us handle the disposal of unwanted items. From old furniture to electronics, we can responsibly dispose of or donate items you no longer need, reducing the stress of decluttering before your move.",
    },
    {
        img: "/services/rates.png",
        title: "Affordable Rates",
        url: "rates",
        description:
            "Whether you're a student moving to a new apartment or a senior downsizing to a smaller home, we've got you covered with our special rates. Call now to book your move.",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="w-full py-12 md:py-24 lg:py-32 bg-slate-100"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        Our Services
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                        We offer a wide range of services to meet every type of
                        need.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {services.map((service, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <img
                                    alt={service.title}
                                    className="w-full h-48 object-cover"
                                    height="200"
                                    src={service.img}
                                    style={{
                                        aspectRatio: "200/200",
                                        objectFit: "contain",
                                    }}
                                    width="200"
                                />
                                <p className="mt-4 text-gray-500">
                                    {service.description}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-orange-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-600 disabled:pointer-events-none disabled:opacity-50"
                                    href={service.url}
                                >
                                    Learn More
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
