"use client";
import Image from "next/image";
import React, { useState } from "react";

const services = [
    {
        title: "Local and Long-Distance Moving Services",
        whatWeOffer: {
            subtitle: "What We Offer",
            description:
                "From local transitions to long-distance relocations, trust us to handle every aspect of your move with precision and care.",
            keyFeatures: [
                {
                    title: "Timely and Reliable Transport",
                    description:
                        "With a network of trusted partners and a fleet of reliable vehicles, we guarantee timely and secure transportation of your possessions to your new destination.",
                },
                {
                    title: "Secure Packing and Handling",
                    description:
                        "From careful packing of delicate items to securing larger furniture, we ensure that your possessions are transported safely and arrive at your new location in pristine condition.",
                },
                {
                    title: "Customer-Centric Approach",
                    description:
                        "Prioritizing your comfort and peace of mind throughout the move.",
                },
                {
                    title: "Local Expertise",
                    description:
                        "With our extensive knowledge of the local area, we navigate the logistics efficiently, avoiding potential hurdles and ensuring a smooth transition to your new location. Rest assured, your belongings will reach their destination without unnecessary delays.",
                },
                {
                    title: "Continuous Communication",
                    description:
                        "Throughout the long-distance move, we maintain clear communication, providing updates on the progress of your relocation to keep you informed every step of the way.",
                },
            ],
        },
        whyChooseUs: {
            subtitle: "Why Choose Us for Local or Long-Distance Moves",
            reasons: [
                {
                    title: "Trusted Professionals",
                    description:
                        "With 15 years of expertise, we specialize in navigating long-distance relocations efficiently.",
                },
                // ... other reasons ...
            ],
        },
        ourProcess: {
            subtitle: "Our Process",
            steps: [
                {
                    title: "Free Estimate",
                    description:
                        "Accurate estimates with no hidden fees at all. Our owners are directly involved in every aspect of the business. If you like, you can have us come over to actually see what needs to be moved for a more accurate estimate.",
                },
                // ... other steps ...
            ],
        },
        callToAction: {
            text: "Planning a local or long-distance move? Contact us today for a consultation and personalized quote. Let us handle the complexities while you focus on the excitement of starting anew in your new location!",
            buttonText: "Call Button",
        },
    },
    // Add more services as needed
];

export default function ServicePage() {
    const [selectedService, setSelectedService] = useState(null);

    const handleLearnMore = (serviceId) => {
        const service = services.find((s) => s.id === serviceId);
        setSelectedService(service);
    };

    return (
        <div className="px-4 py-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-4 rounded-lg shadow"
                        >
                            <h3 className="text-xl font-semibold">
                                {service.title}
                            </h3>
                            <p>{service.description}</p>
                            <button
                                onClick={() => handleLearnMore(service.id)}
                                className="text-blue-500 hover:text-blue-700"
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>

                {selectedService && (
                    <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">
                            {selectedService.title}
                        </h3>
                        <Image
                            src={selectedService.image}
                            alt={selectedService.title}
                            className="w-full h-auto mb-4"
                        />
                        <p>{selectedService.detail}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
