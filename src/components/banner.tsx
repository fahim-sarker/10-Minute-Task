import Image from "next/image";
import { ChevronRight, Star } from "lucide-react";
import Demoimg from "../../public/assets/images/demo.jpg"
import Bottomimg from "../../public/assets/images/bottomimg.jpg"
import Class from "../../public/assets/images/class.jpg"

export default function Banner() {
  return (
    <div className="bg-gray-900 flex items-center justify-center py-20">
      <div className="container mx-auto w-full space-y-6">
        <div className="text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
            <span className="text-white">শেখার যাত্রা শুরু এখানেই</span>
            <span className="text-orange-400 inline-block ml-2 size-[50px]">
              <Star />
            </span>
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-950 rounded-lg overflow-hidden">
            <div className="bg-blue-800 py-2 px-4 w-max rounded-br-lg">
              <span className="text-white text-sm">অনলাইন কোর্স</span>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-white text-xl mb-6">
                অনলাইন ব্যাচ ২০২৫ এর সকল
                <br />
                কোর্সে ভর্তি চলছে!
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-900/50 p-4 rounded-lg">
                  <div className="bg-blue-800/50 p-3 rounded-lg mb-2 mx-auto w-16 h-16 flex items-center justify-center">
                    <Image
                      src={Class}
                      width={40}
                      height={40}
                      alt="Class 6-8 icon"
                    />
                  </div>
                  <p className="text-white text-sm">ক্লাস ৬,৭,৮</p>
                </div>
                <div className="bg-blue-900/50 p-4 rounded-lg">
                  <div className="bg-blue-800/50 p-3 rounded-lg mb-2 mx-auto w-16 h-16 flex items-center justify-center">
                    <Image
                      src={Class}
                      width={40}
                      height={40}
                      alt="Class 9-10 icon"
                    />
                  </div>
                  <p className="text-white text-sm">ক্লাস ৯, ১০</p>
                </div>
                <div className="bg-blue-900/50 p-4 rounded-lg">
                  <div className="bg-blue-800/50 p-3 rounded-lg mb-2 mx-auto w-16 h-16 flex items-center justify-center">
                    <Image src={Class} width={40} height={40} alt="HSC icon" />
                  </div>
                  <p className="text-white text-sm">HSC ২৫, ২৬</p>
                </div>
                <div className="bg-blue-900/50 p-4 rounded-lg">
                  <div className="bg-blue-800/50 p-3 rounded-lg mb-2 mx-auto w-16 h-16 flex items-center justify-center">
                    <Image src={Class} width={40} height={40} alt="HSC icon" />
                  </div>
                  <p className="text-white text-sm">HSC ২৭</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <span className="text-green-400 text-sm">
                  এইচএসসি ২৩-২৪ ফ্রি ক্লাস বুক করুন
                </span>
                <ChevronRight className="h-4 w-4 text-green-400" />
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-amber-950 rounded-lg overflow-hidden">
            <div className="bg-amber-800 py-2 px-4 w-max rounded-br-lg">
              <span className="text-white text-sm">অনলাইন কোর্স</span>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-white text-xl mb-6">
                পছন্দের স্কিল শিখুন, নিজেকে সেরা
                <br />
                করে গড়ে তুলুন
              </h2>

              <div className="grid grid-cols-5 gap-2">
                <Image
                  src={Demoimg}
                  width={80}
                  height={120}
                  alt="English course"
                  className="rounded-md"
                />
                <Image
                  src={Demoimg}
                  width={80}
                  height={120}
                  alt="IELTS course"
                  className="rounded-md"
                />
                <Image
                  src={Demoimg}
                  width={80}
                  height={120}
                  alt="IELTS daily course"
                  className="rounded-md"
                />
                <Image
                  src={Demoimg}
                  width={80}
                  height={120}
                  alt="English grammar course"
                  className="rounded-md"
                />
                <Image
                  src={Demoimg}
                  width={80}
                  height={120}
                  alt="English course"
                  className="rounded-md"
                />
              </div>

              <div className="mt-6 flex items-center justify-center">
                <span className="text-green-400 text-sm">
                  ৭০+ ফ্রি কোর্সে এনরোল হতে ক্লিক করুন
                </span>
                <ChevronRight className="h-4 w-4 text-green-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-teal-900 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={Bottomimg}
                width={60}
                height={60}
                alt="Kids English"
                className="mr-4"
              />
              <div>
                <h3 className="text-white font-medium">Kids' English</h3>
                <p className="text-teal-300 text-sm">ভর্তি চলছে</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-white" />
          </div>

          <div className="bg-purple-900 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={Bottomimg}
                width={60}
                height={60}
                alt="Spoken English Junior"
                className="mr-4"
              />
              <div>
                <h3 className="text-white font-medium">
                  Spoken English Junior
                </h3>
                <p className="text-purple-300 text-sm">
                  সকাল ব্যাচে ভর্তি চলছে
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-white" />
          </div>

          <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={Bottomimg}
                width={60}
                height={60}
                alt="Spoken English Junior LIVE"
                className="mr-4"
              />
              <div>
                <h3 className="text-white font-medium">
                  Spoken English Junior LIVE ব্যাচ
                </h3>
                <p className="text-gray-300 text-sm">সকাল ব্যাচে ভর্তি চলছে</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
