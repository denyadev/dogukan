import Link from "next/link";

export default function Component() {
    return (
        <section className="relative w-full h-[600px] bg-black">
            <img
                alt="Moving truck"
                className="absolute inset-0 object-cover w-full h-full opacity-50"
                height="1080"
                src="/banner.jpg"
                style={{
                    aspectRatio: "1920/1080",
                    objectFit: "cover",
                }}
                width="1920"
            />
            <div className="relative container px-4 md:px-6 h-full flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-4xl md:text-6xl font-[800] bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
                    Welcome to Adasa Moving and Transportation
                </h1>
                <p className="max-w-2xl mt-6 text-lg md:text-xl">
                    We provide professional, fast, and reliable moving services.
                    Whether you&apos;re moving locally or across the country,
                    we&apos;ve got you covered.
                </p>
                <Link
                    className="inline-flex mt-8 items-center justify-center h-12 px-6 text-lg font-medium text-white bg-orange-500 rounded-md shadow-lg hover:bg-orange-400"
                    href="#"
                >
                    Get a Quote
                </Link>
            </div>
        </section>
    );
}
