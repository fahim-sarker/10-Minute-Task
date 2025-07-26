export type Language = "bn" | "en";

export interface LocalizedContent {
  // Header
  header: {
    title: string;
    subtitle: string;
  };

  // Course sections
  courses: {
    onlineCourse: string;
    onlineBatch2025: string;
    enrollmentOpen: string;
    class678: string;
    class910: string;
    hsc2526: string;
    hsc27: string;
    freeClassBooking: string;
    skillLearning: {
      title: string;
      subtitle: string;
      freeCoursesEnroll: string;
    };
  };

  // Bottom courses
  bottomCourses: {
    kidsEnglish: {
      title: string;
      subtitle: string;
    };
    spokenEnglishJunior: {
      title: string;
      subtitle: string;
    };
    spokenEnglishLive: {
      title: string;
      subtitle: string;
    };
  };

  // Footer
  footer: {
    company: {
      title: string;
      links: {
        career: string;
        joinTeacher: string;
        joinAffiliate: string;
        privacy: string;
        refund: string;
        terms: string;
      };
    };
    others: {
      title: string;
      links: {
        blog: string;
        bookStore: string;
        freeNotes: string;
        jobPrep: string;
        verifyCert: string;
        freeDownload: string;
      };
    };
    contact: {
      title: string;
      callUs: string;
      whatsapp: string;
      outsideBd: string;
      emailUs: string;
    };
    appDownload: string;
    copyright: string;
  };

  // Add this to the LocalizedContent interface
  courseDetails: {
    coursePreview: string;
    courseTrailer: string;
    meetInstructors: string;
    courseInformation: string;
    duration: string;
    level: string;
    language: string;
    certificate: string;
    selfPaced: string;
    beginnerToAdvanced: string;
    yes: string;
    noDescription: string;
    noDetails: string;
  };
}

export const translations: Record<Language, LocalizedContent> = {
  bn: {
    header: {
      title: "শেখার যাত্রা শুরু এখানেই",
      subtitle: "লাখো শিক্ষার্থীর বিশ্বস্ত অনলাইন শিক্ষা প্ল্যাটফর্ম",
    },
    courses: {
      onlineCourse: "অনলাইন কোর্স",
      onlineBatch2025: "অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!",
      enrollmentOpen: "ভর্তি চলছে",
      class678: "ক্লাস ৬,৭,৮",
      class910: "ক্লাস ৯, ১০",
      hsc2526: "HSC ২৫, ২৬",
      hsc27: "HSC ২৭",
      freeClassBooking: "এইচএসসি ২৩-২৪ ফ্রি ক্লাস বুক করুন",
      skillLearning: {
        title: "পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন",
        subtitle: "দক্ষতা উন্নয়নের জন্য বিশেষ কোর্স",
        freeCoursesEnroll: "৭০+ ফ্রি কোর্সে এনরোল হতে ক্লিক করুন",
      },
    },
    bottomCourses: {
      kidsEnglish: {
        title: "Kids' English",
        subtitle: "ভর্তি চলছে",
      },
      spokenEnglishJunior: {
        title: "Spoken English Junior",
        subtitle: "সকাল ব্যাচে ভর্তি চলছে",
      },
      spokenEnglishLive: {
        title: "Spoken English Junior LIVE ব্যাচ",
        subtitle: "সকাল ব্যাচে ভর্তি চলছে",
      },
    },
    footer: {
      company: {
        title: "কোম্পানি",
        links: {
          career: "ক্যারিয়ার / নিয়োগ",
          joinTeacher: "শিক্ষক হিসেবে যোগ দিন",
          joinAffiliate: "অ্যাফিলিয়েট হিসেবে যোগ দিন",
          privacy: "গোপনীয়তা নীতি",
          refund: "রিফান্ড নীতি",
          terms: "শর্তাবলী",
        },
      },
      others: {
        title: "অন্যান্য",
        links: {
          blog: "ব্লগ",
          bookStore: "বুক স্টোর",
          freeNotes: "ফ্রি নোটস ও গাইড",
          jobPrep: "চাকরি প্রস্তুতি কোর্স",
          verifyCert: "সার্টিফিকেট যাচাই",
          freeDownload: "ফ্রি ডাউনলোড",
        },
      },
      contact: {
        title: "যোগাযোগ করুন",
        callUs: "কল করুন:",
        whatsapp: "হোয়াটসঅ্যাপ:",
        outsideBd: "বাংলাদেশের বাইরে:",
        emailUs: "ইমেইল:",
      },
      appDownload: "আমাদের মোবাইল অ্যাপ ডাউনলোড করুন",
      copyright: "২০১৫ - ২০২৫ কপিরাইট © ১০ মিনিট স্কুল। সকল অধিকার সংরক্ষিত।",
    },
    courseDetails: {
      coursePreview: "কোর্স প্রিভিউ",
      courseTrailer: "কোর্স ট্রেইলার",
      meetInstructors: "আপনার শিক্ষকদের সাথে পরিচিত হন",
      courseInformation: "কোর্সের তথ্য",
      duration: "সময়কাল",
      level: "লেভেল",
      language: "ভাষা",
      certificate: "সার্টিফিকেট",
      selfPaced: "নিজের গতিতে",
      beginnerToAdvanced: "শুরু থেকে উন্নত",
      yes: "হ্যাঁ",
      noDescription: "কোনো বিবরণ উপলব্ধ নেই।",
      noDetails: "কোনো বিস্তারিত উপলব্ধ নেই।",
    },
  },
  en: {
    header: {
      title: "Learning Journey Starts Here",
      subtitle: "Trusted online education platform for millions of students",
    },
    courses: {
      onlineCourse: "Online Course",
      onlineBatch2025: "Enrollment open for all Online Batch 2025 courses!",
      enrollmentOpen: "Enrollment Open",
      class678: "Class 6,7,8",
      class910: "Class 9, 10",
      hsc2526: "HSC 25, 26",
      hsc27: "HSC 27",
      freeClassBooking: "Book HSC 23-24 free classes",
      skillLearning: {
        title: "Learn your favorite skills, build yourself to be the best",
        subtitle: "Special courses for skill development",
        freeCoursesEnroll: "Click to enroll in 70+ free courses",
      },
    },
    bottomCourses: {
      kidsEnglish: {
        title: "Kids' English",
        subtitle: "Enrollment Open",
      },
      spokenEnglishJunior: {
        title: "Spoken English Junior",
        subtitle: "Morning batch enrollment open",
      },
      spokenEnglishLive: {
        title: "Spoken English Junior LIVE Batch",
        subtitle: "Morning batch enrollment open",
      },
    },
    footer: {
      company: {
        title: "Company",
        links: {
          career: "Career / Recruitment",
          joinTeacher: "Join as a Teacher",
          joinAffiliate: "Join as an Affiliate",
          privacy: "Privacy policy",
          refund: "Refund policy",
          terms: "Terms & Conditions",
        },
      },
      others: {
        title: "Others",
        links: {
          blog: "Blog",
          bookStore: "Book Store",
          freeNotes: "Free Notes & Guides",
          jobPrep: "Job Preparation Courses",
          verifyCert: "Verify Certificate",
          freeDownload: "Free Download",
        },
      },
      contact: {
        title: "Keep up with us at",
        callUs: "Call Us:",
        whatsapp: "Whatsapp:",
        outsideBd: "Outside Bangladesh:",
        emailUs: "Email Us:",
      },
      appDownload: "Download Our Mobile App",
      copyright:
        "2015 - 2025 Copyright © 10 Minute School. All rights reserved.",
    },
    courseDetails: {
      coursePreview: "Course Preview",
      courseTrailer: "Course Trailer",
      meetInstructors: "Meet Your Instructors",
      courseInformation: "Course Information",
      duration: "Duration",
      level: "Level",
      language: "Language",
      certificate: "Certificate",
      selfPaced: "Self-paced",
      beginnerToAdvanced: "Beginner to Advanced",
      yes: "Yes",
      noDescription: "No description available.",
      noDetails: "No details available.",
    },
  },
};

export function getTranslation(language: Language): LocalizedContent {
  return translations[language];
}

