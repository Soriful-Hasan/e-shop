"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav className="w-full border-b ">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          MyShop
        </Link>

        {/* Desktop menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className="px-4 py-2 hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile full drawer */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-semibold hover:text-primary transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
