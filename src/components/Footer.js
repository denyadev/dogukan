import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-orange-500 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left place-content-end ">
                {/* Final Message and Copyright */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Let&apos;s Make Your Move Smooth and Stress-Free!
                    </h3>
                    <p>
                        Whether it&apos;s a local or long-distance move,
                        residential or commercial relocation, our team at
                        Adanian Way Transportation is committed to providing you
                        with top-notch service. Contact us today, and let&apos;s
                        get started on your hassle-free moving journey!
                    </p>
                </div>
                <div></div>
                {/* Contact Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p>
                        Have questions or ready to schedule your move? Contact
                        our friendly team today.
                    </p>
                    <ul className="mt-4">
                        <li>Phone: 647-648-0454</li>
                        <li>Email: hello@adanianmoving.com</li>
                        <li>
                            Visit Us: 10 St. Dennis Drive, Toronto, Ontario, M3C
                            1E9
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="my-4 border-gray-200" />
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm">
                            © {new Date().getFullYear()} Adanian Way
                            Transportation. All rights reserved.
                        </p>
                    </div>

                    <div>
                        <Link href="tel:+647-648-0454">
                            <Button variant="secondary">
                                <Phone
                                    className="text-orange-500 mr-2"
                                    size={18}
                                />
                                647-648-0454
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
