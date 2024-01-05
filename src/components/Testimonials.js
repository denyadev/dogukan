"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "We recently moved, and Adasa Moving and Transportation were fantastic. They made everything simple, took good care of our things, and we're now happily settled. Highly recommended. Great job!",
            author: "Elara Vexley",
        },
        {
            quote: "Our move was a breeze with D. Ozkan and M. Gun. They were on time, careful with our stuff, and really nice. Thanks to them, our move was smooth and easy!",
            author: "Tobin Greycastle",
        },
        {
            quote: "Shoutout to D. Ozkan and M. Gun for an easy and stress-free move. They were fantastic—definitely recommend their services!",
            author: "Mariselle Thornhart",
        },
    ];

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-8 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none capitalize">
                            What our clients are saying
                        </h2>
                        <p className="text-gray-600 mx-auto leading-relaxed max-w-2xl">
                            Our goal is to transform Toronto relocations with
                            dependable, personalized, reliable, and stress-free
                            services that feel like an extension of family care.
                        </p>
                    </div>
                    <div className="w-full max-w-[250px] md:max-w-[700px]">
                        <Carousel className="w-full mx-auto max-w-xs">
                            <CarouselContent>
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-4">
                                                    <span className="text-4xl font-semibold">
                                                        <CarouselItem
                                                            key={index}
                                                            className="flex flex-col space-y-6"
                                                        >
                                                            <div className="flex flex-col items-center space-y-4">
                                                                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg">
                                                                    &quot;
                                                                    {
                                                                        testimonial.quote
                                                                    }
                                                                    &quot;
                                                                </p>
                                                                <div className="flex items-center space-x-2">
                                                                    <div className="font-semibold text-sm">
                                                                        {
                                                                            testimonial.author
                                                                        }
                                                                    </div>
                                                                    <div className="text-sm text-yellow-500 dark:text-yellow-300">
                                                                        ★★★★★
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </CarouselItem>
                                                    </span>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
