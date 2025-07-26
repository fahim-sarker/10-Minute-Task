"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Image from "next/image";
import { ChevronRight, Star } from "lucide-react";
import Demoimg from "../../public/assets/images/demo.jpg";
import Bottomimg from "../../public/assets/images/bottomimg.jpg";
import Class from "../../public/assets/images/class.jpg";
import { getTranslation, type Language } from "@/lib/localization";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface BannerProps {
  currentLang?: Language;
}

export default function Banner({ currentLang = "bn" }: BannerProps) {
  const t = getTranslation(currentLang);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bottomCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (titleRef.current) {
      const split = new SplitText(titleRef.current, { type: "chars" });

      gsap.from(split.chars, {
        yPercent: 200,
        opacity: 0,
        stagger: 0.03,
        ease: "power2.out",
        duration: 1,
      });
    }
  }, []);

  useEffect(() => {
    bottomCardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", opacity: 0 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          duration: 1,
          ease: "circ.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  const bgColors = ["bg-teal-900", "bg-purple-900", "bg-gray-800"];
  const textColors = ["text-teal-300", "text-purple-300", "text-gray-300"];

  return (
    <div className="bg-gray-900 flex items-center justify-center lg:py-20 py-8 xl:px-0 px-4">
      <div className="container mx-auto w-full space-y-6">
        <div className="text-center relative">
          <h1
            ref={titleRef}
            className="hero-title text-2xl sm:text-3xl md:text-5xl font-bold text-white md:mb-10 mb-5 text-center"
          >
            <span className="text-white">{t.header.title}</span>
            <span className="text-orange-400 inline-block ml-2 lg:size-[50px] size-[30px]">
              <Star />
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-blue-950 rounded-lg overflow-hidden">
            <div className="bg-blue-800 py-2 px-4 w-max rounded-br-lg">
              <span className="text-white text-sm">
                {t.courses.onlineCourse}
              </span>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-white text-xl mb-6">
                {t.courses.onlineBatch2025}
              </h2>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                  t.courses.class678,
                  t.courses.class910,
                  t.courses.hsc2526,
                  t.courses.hsc27,
                ].map((text, index) => (
                  <div key={index} className="bg-blue-900/50 p-4 rounded-lg">
                    <div className="bg-blue-800/50 p-3 rounded-lg mb-2 mx-auto w-16 h-16 flex items-center justify-center">
                      <Image
                        src={Class}
                        width={40}
                        height={40}
                        alt="Class Icon"
                      />
                    </div>
                    <p className="text-white text-sm">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center">
                <span className="text-green-400 text-sm">
                  {t.courses.freeClassBooking}
                </span>
                <ChevronRight className="h-4 w-4 text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-amber-950 rounded-lg overflow-hidden">
            <div className="bg-amber-800 py-2 px-4 w-max rounded-br-lg">
              <span className="text-white text-sm">
                {t.courses.onlineCourse}
              </span>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-white text-xl mb-6">
                {t.courses.skillLearning.title}
              </h2>
              <div className="inline-grid grid-cols-5 gap-2 justify-center">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Image
                      key={i}
                      src={Demoimg}
                      width={80}
                      height={120}
                      alt="Skill course"
                      className="rounded-md"
                    />
                  ))}
              </div>
              <div className="mt-6 flex items-center justify-center">
                <span className="text-green-400 text-sm">
                  {t.courses.skillLearning.freeCoursesEnroll}
                </span>
                <ChevronRight className="h-4 w-4 text-green-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            t.bottomCourses.kidsEnglish,
            t.bottomCourses.spokenEnglishJunior,
            t.bottomCourses.spokenEnglishLive,
          ].map((item, idx) => (
            <div
              key={idx}
              ref={el => {
                if (el) bottomCardsRef.current[idx] = el;
              }}
              className={`hero-text-scroll ${bgColors[idx]} rounded-lg p-4 flex items-center justify-between opacity-0`}
              style={{
                clipPath: "polygon(55% 1%, 55% 1%, 56% 100%, 56% 100%)",
              }}
            >
              <div className="flex items-center">
                <Image
                  src={Bottomimg}
                  width={60}
                  height={60}
                  alt={item.title}
                  className="mr-4"
                />
                <div>
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className={`${textColors[idx]} text-sm`}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
