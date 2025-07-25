"use client";

import { useState, useRef, useEffect } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import Logo from "../../../public/assets/svg/logo.svg";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentLang: string;
}

export default function Header({ currentLang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm border-b z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Responsive Logo */}
          <Image
            src={Logo}
            alt="10 Minute School"
            width={0}
            height={0}
            className="w-28 md:w-36 h-auto object-contain"
            priority
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-[120px]">
              <LanguageSwitcher currentLang={currentLang} />
            </div>
            <button className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-transparent hover:text-black border border-green-400 transition duration-300 ease-in-out cursor-pointer">
              লগ-ইন
            </button>
            <button className="px-6 py-2 rounded-lg text-green-600 border border-green-600 hover:bg-green-600 hover:text-white transition duration-300 ease-in-out cursor-pointer">
              সাইন আপ
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-green-600 focus:outline-none"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 p-4 bg-white shadow-lg transform
           transition-transform duration-500 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={sidebarRef}
      >
        <div className="flex justify-end mr-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-red-600"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-4 mt-5 mr-4">
          <LanguageSwitcher currentLang={currentLang} />
          <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-transparent
           hover:text-black border border-green-400 transition duration-300 ease-in-out cursor-pointer">
            লগ-ইন
          </button>
          <button className="px-4 py-2 rounded-lg text-green-600 border border-green-600 hover:bg-green-600 hover:text-white transition duration-300 ease-in-out cursor-pointer">
            সাইন আপ
          </button>
        </div>
      </div>
    </header>
  );
}
