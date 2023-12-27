"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Adanian Way Transportation made our move so easy and stress-free. Their attention to detail and care for our belongings was exceptional!",
            author: "Jane Doe",
        },
        {
            quote: "I can't thank the team enough for their efficient and friendly service. Moving across the city was a breeze with their help.",
            author: "John Smith",
        },
        {
            quote: "From the first box packed to the last item placed in our new home, Adanian Way was professional, courteous, and incredibly organized.",
            author: "Emma Johnson",
        },
    ];

    return (
        <section id="testimonials" className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center underline decoration-orange-500 uppercase">
                    CUSTOMER REVIEWS/TESTIMONIALS
                </h2>
                <div className="text-center mt-6 mb-12">
                    <p className="text-gray-600 mx-auto leading-relaxed max-w-2xl">
                        Our goal is to transform Toronto relocations with
                        dependable, personalized, reliable, and stress-free
                        services that feel like an extension of family care.
                    </p>
                </div>

                <Carousel>
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105"
                            >
                                <blockquote className="italic quote mb-4">
                                    “{testimonial.quote}”
                                </blockquote>
                                <p className="text-right font-semibold">
                                    - {testimonial.author}
                                </p>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
