"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigation = [
  { name: "首页", href: "#home" },
  { name: "功能", href: "#features" },
  { name: "产品", href: "#products" },
  { name: "关于", href: "#about" },
  { name: "联系", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur-xl supports-[backdrop-filter]:bg-black/90">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
              <div className="absolute inset-0 h-8 w-8 bg-gray-300 blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold text-white">
              Future App 2025
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-1">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-gray-800"
            >
              登录
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200 border-0 shadow-lg transition-all duration-300">
              开始体验
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
              className="w-[300px] bg-black/95 backdrop-blur-xl border-gray-800"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-6 w-6 text-gray-300" />
                  <span className="text-lg font-bold text-white">
                    Future App 2025
                  </span>
                </div>
                
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="flex flex-col space-y-3 pt-6 border-t border-gray-800">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start"
                  >
                    登录
                  </Button>
                  <Button className="bg-white text-black hover:bg-gray-200 justify-start">
                    开始体验
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