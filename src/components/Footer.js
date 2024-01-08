import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <footer className="bg-orange-500 text-white py-12 px-4 md:px-6">
      <div className="container mx-auto grid gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center md:text-left">
            Let&apos;s Make Your Move Smooth and Stress-Free!
          </h2>
          <p>
            Whether it&apos;s a local or long-distance move, residential or
            commercial relocation, our team at Adasa Moving and Transportation
            is committed to providing you with top-notch service. Contact us
            today, and let&apos;s get started on your hassle-free moving
            journey!
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center md:text-left">
            Contact Us
          </h3>
          <p>
            Have questions or ready to schedule your move? Contact our friendly
            team today.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-6 w-6" />
              <Link href="tel:6476480454" className="text-white underline">
                647-648-0454
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="h-6 w-6" />
              <Link
                href="mailto: info@adasamoving.com"
                className="text-white underline"
              >
                info@adasamoving.com
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <LocateIcon className="h-6 w-6" />
              <span>10 St. Dennis Drive, Toronto, Ontario, M3C 1E9</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p>© 2024 Adanian Way Transportation. All rights reserved.</p>
          <Link href="tel:6476480454">
            <Button
              className="border-white text-black mt-6 md:mt-0"
              variant="outline"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call 647-648-0454
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
