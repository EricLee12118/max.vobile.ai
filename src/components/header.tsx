"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useI18n } from "@/contexts/I18nContext";
import { useTypedTranslation } from "@/hooks/useTranslation";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/lib/i18n";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  
  const { locale, changeLocale } = useI18n();
  const { t } = useTypedTranslation();
  
  const currentLanguage = SUPPORTED_LOCALES[locale];
  
  const navigation = [
    { name: t('navigation.home'), href: "/" },
    { name: t('navigation.creator'), href: "/asset" },
    { name: t('navigation.asset'), href: "/metaAsset" },
    { name: t('navigation.dataBridge'), href: "/dataBridge" },
    { name: t('navigation.marketplace'), href: "https://www.crealabs.io/", external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (newLocale: SupportedLocale) => {
    changeLocale(newLocale);
    setIsLanguageOpen(false);
  };

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
              {t('navigation.signIn')}
            </Button>
            <div className="relative" ref={languageRef}>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-gray-800 flex items-center space-x-1 px-3"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">{currentLanguage.name}</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                  isLanguageOpen ? 'rotate-180' : ''
                }`} />
              </Button>
              
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-black/95 backdrop-blur-xl border border-gray-700 rounded-lg shadow-xl z-50">
                  <div className="py-2">
                    {Object.entries(SUPPORTED_LOCALES).map(([code, language]) => (
                      <button
                        key={code}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 flex items-center space-x-2 ${
                          locale === code
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                        onClick={() => handleLanguageSelect(code as SupportedLocale)}
                      >
                        <span className="text-base">{language.flag}</span>
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
                    {t('navigation.signIn')}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start"
                  >
                    <Globe className="h-5 w-5 mr-2" />
                    {t('navigation.language')}
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