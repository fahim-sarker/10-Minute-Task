import { LanguageSwitcher } from "@/components/language-switcher";
import Logo from "../../../public/assets/svg/logo.svg";
import Image from "next/image";

interface HeaderProps {
  currentLang: string;
}

export default function Header({ currentLang }: HeaderProps) {
  return (
    <header className="relative bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Image
            src={Logo}
            alt="10 Minute School"
            width={150}
            height={50}
            className="object-contain"
          />

          <div className="flex items-center space-x-2">
            {/* Language Switcher with fixed width to prevent layout jump */}
            <div className="w-[120px]">
              <LanguageSwitcher currentLang={currentLang} />
            </div>

            {/* Login button */}
            <button className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-transparent hover:text-black border border-green-400 transition duration-300 ease-in-out cursor-pointer">
              লগ-ইন
            </button>

            {/* Signup button */}
            <button className="px-6 py-2 rounded-lg text-green-600 border border-green-600 hover:bg-green-600 hover:text-white transition duration-300 ease-in-out cursor-pointer">
              সাইন আপ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
