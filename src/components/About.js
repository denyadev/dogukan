import Image from "next/image"; // Ensure to import the Image component

export default function About() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                {/* Text Section */}
                <div className="flex-1 z-10">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-10  underline decoration-orange-500">
                        About Us
                    </h2>
                    <div className="bg-white shadow-xl rounded-lg p-6 relative -mr-16">
                        <p className="text-gray-600 text-lg mb-4">
                            Since 2013, Adanian Way Transportation, a
                            family-owned and operated business, has been a
                            cornerstone in Toronto&apos;s moving industry. We
                            excel in providing personalized, reliable moving
                            services, ensuring every relocation is seamless and
                            stress-free.
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            Founders M.Gun and D.Ozkan started Adanian Way
                            Transportation to address the need for dependable,
                            caring moving services. Our values—reliability,
                            care, professionalism, and customer-centricity—drive
                            our mission to offer stress-free moving experiences.
                        </p>
                        <p className="text-gray-600 text-lg">
                            Our goal is to redefine moving in Toronto, offering
                            a family-oriented experience that ensures comfort
                            and assurance throughout the journey to a new home.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 hidden lg:block">
                    <Image
                        src="/1.avif" // Replace with your image path
                        width={1200}
                        height={1200}
                        objectFit="cover"
                        alt="About Us"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
