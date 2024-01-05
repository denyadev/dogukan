"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (route) => {
    if (route === "/") {
      return pathname === route;
    }
    return pathname.includes(route);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-orange-500 py-2 shadow-md z-50 text-white">
      <nav className="container mx-auto">
        <div className="flex flex-col justify-between items-end mx-4">
          <div className="md:hidden">
            <div className="flex gap-4 items-center font-bold tracking-tight">
              Menu
              <Bars3BottomRightIcon
                className="w-8 h-8 "
                onClick={handleMenuToggle}
              />
            </div>
          </div>
          <div
            className={`flex-col w-full md:hidden gap-1 mt-2 mr-4 ${
              isMenuOpen ? "flex" : "hidden md:flex"
            }`}
          >
            <Link
              href="/#about"
              className={`module-button ${
                isActive("#about") ? "active-link" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/#services"
              className={`module-button ${
                isActive("/#services") ? "active-link" : ""
              }`}
            >
              Our Services
            </Link>
            <Link
              href="/#why-us"
              className={`module-button ${
                isActive("/#services") ? "active-link" : ""
              }`}
            >
              Why Us
            </Link>
            <Link
              href="/#testimonials"
              className={`module-button ${
                isActive("/#testimonials") ? "active-link" : ""
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              className={`module-button ${
                isActive("/#contact") ? "active-link" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="md:flex hidden flex-row gap-4 my-2 mx-4 lg:mx-0 md:justify-between md:items-center">
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={64} // Adjust based on your logo's size
              height={64} // Adjust based on your logo's size
            />
          </Link>
          <div className="flex space-x-8">
            <Link
              href="/#about"
              className={`module-button ${
                isActive("#about") ? "active-link" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/#services"
              className={`module-button ${
                isActive("/#services") ? "active-link" : ""
              }`}
            >
              Our Services
            </Link>
            <Link
              href="/#why-us"
              className={`module-button ${
                isActive("/#services") ? "active-link" : ""
              }`}
            >
              Why Us
            </Link>
            <Link
              href="/#testimonials"
              className={`module-button ${
                isActive("/#testimonials") ? "active-link" : ""
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              className={`module-button ${
                isActive("/sponsors") ? "active-link" : ""
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/#contact"
              className={`module-button ${
                isActive("/sponsors") ? "active-link" : ""
              }`}
            >
              <Button variant="secondary">Get Quote</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
