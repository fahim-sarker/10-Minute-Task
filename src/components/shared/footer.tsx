import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "../../../public/assets/svg/logo.svg";
import Google from "../../../public/assets/images/google.jpg";
import Playstore from "../../../public/assets/images/playstore.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src={Logo}
              alt="10 Minute School"
              width={150}
              height={50}
              className="object-contain"
            />

            <div>
              <h4 className="font-semibold mb-3">Download Our Mobile App</h4>
              <div className="space-y-2">
                <Image
                  src={Google}
                  width={135}
                  height={40}
                  alt="Get it on Google Play"
                  className="rounded"
                />
                <Image
                  src={Playstore}
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
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-600">
                  Career / Recruitment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Join as a Teacher
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Join as an Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Refund policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Others Section */}
          <div>
            <h4 className="font-semibold mb-4">Others</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Book Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Free Notes & Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Job Preparation Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Verify Certificate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Free Download
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-4">Keep up with us at</h4>
            <div className="space-y-2 text-sm">
              <p>
                Call Us:{" "}
                <span className="text-green-600 font-semibold">16910</span>{" "}
                (24×7)
              </p>
              <p>
                Whatsapp:{" "}
                <span className="text-green-600 font-semibold">
                  +8801896016252
                </span>
                (24×7)
              </p>
              <p>
                Outside Bangladesh:{" "}
                <span className="text-green-600 font-semibold">
                  +880 961091690
                </span>
              </p>
              <p>
                Email Us:{" "}
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
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
              >
                <div className="h-4 w-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">T</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-600">
          <p>2015 - 2025 Copyright © 10 Minute School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
