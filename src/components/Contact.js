import { Button } from "./ui/button"; // Ensure this path is correct for your Button component
import Image from "next/image"; // Ensure to import the Image component
import { Phone, Mail, MapPin, Clock } from "lucide-react"; // Import Lucide icons
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap -mx-4">
                    {/* Contact Information */}
                    <div className="px-4 w-full md:w-1/2">
                        <div className="mb-12 md:mb-0">
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-10 underline decoration-orange-500 uppercase">
                                Contact Us
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Have questions or ready to schedule your move?
                                We&apos;re here to help!
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <Phone
                                        className="text-orange-500 mr-3"
                                        size={24}
                                    />
                                    <Link
                                        href="tel:+647-648-0454"
                                        className="text-blue-600 underline decoration-orange-500"
                                    >
                                        CLICK TO CALL
                                    </Link>
                                </div>
                                <div className="flex items-center">
                                    <Mail
                                        className="text-orange-500 mr-3"
                                        size={24}
                                    />
                                    <span className="text-gray-600">
                                        hello@adanianmoving.com
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin
                                        className="text-orange-500 mr-3"
                                        size={24}
                                    />
                                    <span className="text-gray-600">
                                        10 St. Dennis Drive, Toronto, Ontario,
                                        M3C 1E9
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <Clock
                                        className="text-orange-500 mr-3"
                                        size={24}
                                    />
                                    <span className="text-gray-600">
                                        Office Hours: Monday - Friday 8:00 -
                                        5:00pm
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="px-4 w-full md:w-1/2">
                        <div className="bg-white p-8 rounded shadow-xl">
                            <form className="space-y-6">
                                <div>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-orange-500 py-2"
                                    />
                                </div>
                                <div>
                                    <label>Moving Date</label>
                                    <input
                                        type="date"
                                        placeholder="Moving Date:"
                                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-orange-500 py-2"
                                    />
                                </div>
                                <div>
                                    <label>Service</label>
                                    Drop Down to select 1 of 7 services
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-orange-500 py-2"
                                    />
                                </div>
                                <div>
                                    <label>Message</label>

                                    <textarea
                                        placeholder="Your Message"
                                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-orange-500 py-2"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white w-full py-2 hover:bg-orange-600 transition-colors duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
