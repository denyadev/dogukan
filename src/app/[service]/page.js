"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ServicePage() {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Local Moves",
            description:
                "Efficient, hassle-free relocation within your local area.",
            image: "/local.avif",
            detail: "Detailed information about local moves...",
        },
        // Add more services as needed
    ];

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
