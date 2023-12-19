import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <div className="relative h-[600px] flex flex-col">
            {/* Background Image with Darkening Overlay */}
            <div className="relative w-full h-full">
                <Image
                    src="/bg.avif" // Replace with your image path
                    layout="fill"
                    objectFit="cover"
                    alt="Background"
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
            {/* Content */}
            <div className="flex-1"></div>{" "}
            {/* This div ensures the content is pushed to the middle */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-5xl font-bold mb-4">
                        Welcome to Adanian Way Transportation
                    </h1>
                    <p className="text-white text-xl mb-6">
                        Reliable and Stress-Free Moving Solutions
                    </p>
                    <Button
                        size="lg"
                        className="hover:bg-orange-400 hover:border-orange-700 hover:scale-105 transition transform"
                    >
                        Get Quote
                    </Button>
                </div>
            </div>
        </div>
    );
}
