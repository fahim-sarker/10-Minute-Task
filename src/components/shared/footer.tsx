import Image from "next/image";

import Logo from "../../../public/assets/svg/logo.svg";
import Google from "../../../public/assets/images/google.jpg";
import Playstore from "../../../public/assets/images/playstore.jpg";
import { getTranslation, type Language } from "@/lib/localization";
import { Youtube } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

interface FooterProps {
  currentLang: Language;
}

const Footer = ({ currentLang }: FooterProps) => {
  const t = getTranslation(currentLang);

  return (
    <footer className="bg-gray-100 text-gray-800 lg:py-12 py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src={Logo || "/placeholder.svg"}
              alt="10 Minute School"
              width={150}
              height={50}
              className="object-contain"
            />
            <div>
              <h4 className="font-semibold mb-3">{t.footer.appDownload}</h4>
              <div className="space-y-2">
                <Image
                  src={Google || "/placeholder.svg"}
                  width={135}
                  height={40}
                  alt="Get it on Google Play"
                  className="rounded"
                />
                <Image
                  src={Playstore || "/placeholder.svg"}
                  width={135}
                  height={40}
                  alt="Download on the App Store"
                  className="rounded"
                />
              </div>
            </div>
          </div>
          {/* Company Section */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.company.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-600">
                  {t.footer.company.links.career}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  {t.footer.company.links.joinTeacher}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  {t.footer.company.links.joinAffiliate}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  {t.footer.company.links.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  {t.footer.company.links.refund}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  {t.footer.company.links.terms}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.others.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-600">
                  {t.footer.others.links.blog}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  {t.footer.others.links.bookStore}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  {t.footer.others.links.freeNotes}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  {t.footer.others.links.jobPrep}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  {t.footer.others.links.verifyCert}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  {t.footer.others.links.freeDownload}
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact.title}</h4>
            <div className="space-y-2 text-sm">
              <p>
                {t.footer.contact.callUs}{" "}
                <span className="text-green-600 font-semibold">16910</span>{" "}
                (24×7)
              </p>
              <p>
                {t.footer.contact.whatsapp}{" "}
                <span className="text-green-600 font-semibold">
                  +8801896016252
                </span>
                (24×7)
              </p>
              <p>
                {t.footer.contact.outsideBd}{" "}
                <span className="text-green-600 font-semibold">
                  +880 961091690
                </span>
              </p>
              <p>
                {t.footer.contact.emailUs}{" "}
                <a
                  href="mailto:support@10minuteschool.com"
                  className="text-green-600 font-semibold"
                >
                  support@10minuteschool.com
                </a>
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
              >
                <FaFacebookF   className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
              >
                <FaInstagram   className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
              >
                <FaLinkedinIn  className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
              >
                <FaYoutube  className="h-4 w-4" />
              </a>
         
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 py-6 text-center text-sm text-gray-600">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
