"use client";

import { useState, useRef, useEffect } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import Logo from "../../../public/assets/svg/logo.svg";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Search } from "lucide-react";

interface HeaderProps {
  currentLang: string;
}

export default function Header({ currentLang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Class 6–12", path: "#", dropdown: true },
    { label: "Skills", path: "#", dropdown: true },
    { label: "Admission", path: "/admission", dropdown: false },
    { label: "Online Batch", path: "#", dropdown: true },
    { label: "English Centre", path: "#", dropdown: true },
    { label: "More", path: "#", dropdown: true },
  ];

  const dropdownContent: Record<string, string[]> = {
    "Class 6–12": [
      "HSC",
      "Class Ten",
      "Class Nine",
      "Class Eight",
      "Class Seven",
      "Class Six",
    ],
    Skills: [
      "All Course",
      "Freelancing",
      "Bundle & It",
      "Bundle",
      "Design & Creative",
      "Professionals",
      "Free",
    ],
    "Online Batch": ["Online Batch (Class 6-10)", "Hsc"],
    "English Centre": [
      "All Programees",
      "IELTS Programee",
      "Spoken English (Junior)",
      "Listening Practice",
      "English Foundation Programee",
      "Kids English"
    ],
    More: ["Job Preparation Courses", "Blog", "Book Store","Free Notes & Guides","Academic Digital Content","Verify Certificate"],
  };

  const renderDropdown = (label: string) => {
    const isOpen = dropdownOpen === label;
    return (
      <div
        className={`
          absolute top-full left-0  w-64 bg-white mt-[2px]  shadow-lg rounded-md overflow-hidden z-50
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto visible"
              : "opacity-0 translate-y-3 pointer-events-none invisible"
          }
        `}
        style={{ willChange: "opacity, transform" }}
      >
        {dropdownContent[label]?.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
          >
            {item}
          </a>
        ))}
      </div>
    );
  };

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
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 xl:px-0 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Image
            src={Logo}
            alt="10 Minute School"
            width={0}
            height={0}
            className="w-28 md:w-36 h-auto object-contain"
            priority
          />

          {/* Search (desktop only) */}
          <div className="hidden md:flex flex-1 mx-4 max-w-md bg-gray-100 rounded-full px-4 py-2 items-center">
            <Search size={18} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="ক্লাস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন…"
              className="bg-transparent w-full focus:outline-none text-sm text-gray-700"
            />
          </div>

          {/* Desktop Navigation: visible below XL only */}
          <div className="hidden xl:flex items-center space-x-6">
            {navItems.map(item => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  setDropdownOpen(item.dropdown ? item.label : null)
                }
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button className="flex items-center text-sm cursor-pointer text-gray-700 font-medium hover:text-green-600 transition">
                  {item.label}
                  {item.dropdown && <ChevronDown size={14} className="ml-1" />}
                </button>
                {item.dropdown && renderDropdown(item.label)}
              </div>
            ))}

            <LanguageSwitcher currentLang={currentLang} />

            <div className="flex items-center text-green-600 font-semibold text-sm">
              <Phone size={16} className="mr-1" />
              16910
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm rounded-lg transition cursor-pointer">
              লগ-ইন
            </button>
          </div>

          {/* Hamburger menu visible on lg up to xl (hidden on xl) */}
          <div className="block xl:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-green-600 focus:outline-none"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar drawer (mobile + XL) */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full p-4 bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-50
          w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-red-600"
            aria-label="Close Sidebar"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 mt-5">
          {navItems.map(item => (
            <div key={item.label}>
              <button
                onClick={() =>
                  setMobileDropdown(prev =>
                    prev === item.label ? null : item.label
                  )
                }
                className="flex justify-between items-center w-full px-4 py-2 border border-gray-200 rounded-md text-sm"
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      mobileDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {item.dropdown && mobileDropdown === item.label && (
                <div className="mt-2 ml-4 space-y-2 text-sm">
                  {dropdownContent[item.label]?.map((itemText, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block text-gray-700 hover:underline"
                    >
                      {itemText}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <LanguageSwitcher currentLang={currentLang} />

          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <Phone size={16} />
            16910
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded-md text-sm cursor-pointer">
            লগ-ইন
          </button>
        </div>
      </div>
    </header>
  );
}
