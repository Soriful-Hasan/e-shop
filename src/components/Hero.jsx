import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="bg-gradient-to-r bg-gray-50 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 leading-tight">
            Shop Smart, <span className="text-primary">Shop Fast</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Discover the best deals on electronics, fashion, and more. Your
            trusted e-commerce platform with secure shopping and lightning-fast
            delivery.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition"
            >
              Start Shopping
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-xl border border-gray-500 hover:text-white text-black hover:bg-gray-800 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/hero-product.png" 
            alt="Shopping illustration"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </header>
  );
}
