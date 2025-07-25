"use client";

import type { Checklist } from "@/types/product";
import { CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ChecklistSectionProps {
  checklist: Checklist[];
  title?: string;
}

export function ChecklistSection({
  checklist,
  title = "What's Included",
}: ChecklistSectionProps) {
  if (!checklist.length) return null;

  const youtubeSrc =
    "https://www.youtube.com/embed/C9zD3gaMIoo?si=jaGEo4c-R3Rb-Xjn";

  const checklistRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (checklistRef.current) {
      setHeight(checklistRef.current.offsetHeight);
    }
  }, [checklist]);

  return (
    <div className="bg-green-50 rounded-lg lg:p-6 p-3 border border-green-200">
      <h2 className="md:text-2xl text-xl font-bold text-gray-900 mb-6">{title}</h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Checklist Items */}
        <div ref={checklistRef} className="space-y-4 flex-1">
          {checklist.map(item => (
            <div key={item.id} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-600 text-sm mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
          <iframe
            src={youtubeSrc}
            title="Course Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
