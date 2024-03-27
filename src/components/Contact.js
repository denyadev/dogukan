import { Button } from "./ui/button"; // Ensure this path is correct for your Button component
import Image from "next/image"; // Ensure to import the Image component
import { Phone, Mail, MapPin, Clock } from "lucide-react"; // Import Lucide icons
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className=" container mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Have questions or ready to schedule your move? We&apos;re here to
            help!
          </p>
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="text-orange-500 mr-3" size={24} />
              <Link
                href="tel:6476480454"
                className="text-blue-600 underline decoration-orange-500"
              >
                CLICK TO CALL
              </Link>
            </div>
            <div className="flex items-center">
              <Mail className="text-orange-500 mr-3" size={24} />
              <Link
                href="mailto: info@adasa.ca"
                className="text-blue-600 underline decoration-orange-500"
              >
                info@adasa.ca
              </Link>
            </div>
            <div className="flex items-center">
              <MapPin className="text-orange-500 mr-3" size={24} />
              <span className="text-gray-600">
                10 St. Dennis Drive, Toronto, Ontario, M3C 1E9
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="text-orange-500 mr-3" size={24} />
              <span className="text-gray-600">
                Office Hours: Monday to Friday: 7am - 9pm & Saturday and
                Sunday: 8am - 9pm
              </span>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <form action="https://formsubmit.co/info@adasa.ca" method="POST">
            <input type="hidden" name="_next" value="adasa.ca"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_subject" value="ADASA Moving"></input>
            <input type="hidden" name="_template" value="table"></input>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Name</label>
              <input
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                type="text"
                name="Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Moving Date</label>
              <input
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                type="date"
                name="MovingDate"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Service</label>
              <select
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                name="Service"
              >
                <option>Local Moves</option>
                <option>Long Distance Moves</option>
                <option>Commercial Moves</option>
                <option>Full Packing Only</option>
                <option>Full Packing and Unpacking</option>
                <option>Piano Moves</option>
                <option>Disposal of Unwanted Items</option>
                <option>Student Specials</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Email Address</label>
              <input
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                type="email"
                name="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Message</label>
              <textarea
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                rows="4"
                name="Message"
              />
            </div>
            <button
              className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-400"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
