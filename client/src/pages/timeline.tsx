import { useQuery } from "@tanstack/react-query";
import TimelineEntryComponent from "@/components/timeline-entry";
import { Skeleton } from "@/components/ui/skeleton";
import type { TimelineEntry } from "@shared/schema";

export default function Timeline() {
  const { data: entries, isLoading, error } = useQuery<TimelineEntry[]>({
    queryKey: ["/api/timeline"],
  });

  if (error) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Timeline</h2>
          <p className="text-pws-gray">Failed to load timeline entries. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Company Timeline</h2>
          <p className="text-xl text-pws-gray">Journey through the decades of Portland Welding Supply</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full timeline-line"></div>

          {/* Timeline entries */}
          <div className="space-y-12">
            {isLoading ? (
              // Loading skeletons
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Skeleton className="h-32 w-full" />
                  </div>
                </div>
              ))
            ) : entries && entries.length > 0 ? (
              entries.map((entry, index) => (
                <TimelineEntryComponent key={entry.id} entry={entry} index={index} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-pws-gray text-lg">No timeline entries found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
