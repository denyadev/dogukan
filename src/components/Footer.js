export default function Footer() {
    return (
        <footer className="bg-orange-500 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
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

                {/* Social Media Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <p>
                        Stay updated with our latest news and moving tips by
                        following us on social media.
                    </p>
                    <ul className="mt-4 flex justify-center md:justify-start space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-200">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-200">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-200">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-200">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

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
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="my-6 border-gray-200" />
                <p className="text-sm">
                    © {new Date().getFullYear()} Adanian Way Transportation. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
}
