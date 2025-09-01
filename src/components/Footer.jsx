import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">MyShop</h2>
          <p className="text-sm leading-6">
            Your trusted e-commerce platform. Shop smart, fast, and securely
            with us.
          </p>
          {/* Social icons */}
          <div className="flex space-x-4 mt-4">
            <Link
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-primary transition"
            >
              <Facebook className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-primary transition"
            >
              <Instagram className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-primary transition"
            >
              <Twitter className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Customer Service
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:text-primary transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-primary transition">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-primary transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>123 Main Street, Dhaka, BD</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>+880 123-456-789</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>support@myshop.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
