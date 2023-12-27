import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 bg-orange-500 text-white py-4 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo and Navigation */}
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <div className="flex items-center">
                    {/* Replace the path to your logo */}

                    <nav className="flex">
                        <Link
                            href="#about"
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-slate-900"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/#services"
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-slate-900"
                        >
                            Services
                        </Link>
                        <Link
                            href="/#testimonials"
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-slate-900"
                        >
                            Testimonials
                        </Link>
                        <Link
                            href="/#contact"
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-slate-900"
                        >
                            Contact Us
                        </Link>
                    </nav>
                    {/* Call to Action */}
                    <Link
                        href="/#contact"
                        className="text-orange-500 bg-white px-5 py-2 rounded-md text-sm font-medium hover:bg-orange-300"
                    >
                        Get Quote
                    </Link>
                </div>
            </div>
        </header>
    );
}
