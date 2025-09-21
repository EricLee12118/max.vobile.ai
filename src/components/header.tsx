"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Creator", href: "/asset" },
  { name: "Asset", href: "/metaAsset" },
  { name: "DataBridge", href: "/dataBridge" },
  { name: "Marketplace", href: "https://www.crealabs.io/", external: true },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl supports-[backdrop-filter]:bg-black/90' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="mr-8">
              <Image
                src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/siteLogo.svg"
                alt="MAX Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Sign in
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-gray-800"
            >
              <Globe className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-black/95 backdrop-blur-xl"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-2">
                  <Image
                    src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/siteLogo.svg"
                    alt="MAX Logo"
                    width={100}
                    height={26}
                    className="h-6 w-auto"
                  />
                </div>
                
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    item.external ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="flex flex-col space-y-3 pt-6">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start"
                  >
                    Sign in
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start"
                  >
                    <Globe className="h-5 w-5 mr-2" />
                    Language
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}