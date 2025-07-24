import { useQuery } from "@tanstack/react-query";
import VideoCard from "@/components/video-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Video } from "@shared/schema";

export default function Commercials() {
  const { data: videos, isLoading, error } = useQuery<Video[]>({
    queryKey: ["/api/videos"],
  });

  if (error) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Videos</h2>
          <p className="text-pws-gray">Failed to load video gallery. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Video Gallery</h2>
          <p className="text-xl text-pws-gray">Historical commercials and company videos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))
          ) : videos && videos.length > 0 ? (
            videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-pws-gray text-lg">No videos found in the gallery.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
