import type { Section } from "@/types/product";

interface InstructorCardProps {
  section: Section;
}

export function InstructorCard({ section }: InstructorCardProps) {
  const instructor = section.content.instructor;

  if (!instructor) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-20 h-20 rounded-full object-cover mx-auto"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {instructor.name}
          </h3>
          <p className="text-blue-600 font-medium mb-2">
            {instructor.designation}
          </p>
          {instructor.bio && (
            <p className="text-gray-600 text-sm leading-relaxed">
              {instructor.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
