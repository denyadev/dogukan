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
      quote:
        "Adanian Way Transportation made our move so easy and stress-free. Their attention to detail and care for our belongings was exceptional!",
      author: "Jane Doe",
    },
    {
      quote:
        "I can't thank the team enough for their efficient and friendly service. Moving across the city was a breeze with their help.",
      author: "John Smith",
    },
    {
      quote:
        "From the first box packed to the last item placed in our new home, Adanian Way was professional, courteous, and incredibly organized.",
      author: "Emma Johnson",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              What our clients are saying
            </h2>
            <p className="text-gray-600 mx-auto leading-relaxed max-w-2xl">
              Our goal is to transform Toronto relocations with dependable,
              personalized, reliable, and stress-free services that feel like an
              extension of family care.
            </p>
          </div>
          <div className="w-full max-w-[700px]">
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
                                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                                  &quot;The project was completed on time and
                                  exceeded our expectations.&quot;
                                </p>
                                <div className="flex items-center space-x-2">
                                  <div className="font-semibold text-sm">
                                    Alice Johnson
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
