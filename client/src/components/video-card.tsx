import { Play, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Video } from "@shared/schema";

interface VideoCardProps {
  video: Video;
}

const getCategoryGradient = (category: string) => {
  switch (category) {
    case "commercial":
      return "from-pws-blue to-pws-dark-blue";
    case "educational":
      return "from-pws-light-blue to-pws-blue";
    case "tour":
      return "from-gray-600 to-gray-800";
    case "training":
      return "from-orange-500 to-red-600";
    case "testimonials":
      return "from-green-500 to-teal-600";
    case "celebration":
      return "from-purple-500 to-indigo-600";
    default:
      return "from-gray-500 to-gray-700";
  }
};

export default function VideoCard({ video }: VideoCardProps) {
  const gradientClass = getCategoryGradient(video.category || "");

  const handlePlay = () => {
    // TODO: Implement video playback
    // For now, this would open the YouTube video if youtubeId is available
    if (video.youtubeId) {
      window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div 
        className={`relative h-48 bg-gradient-to-br ${gradientClass} cursor-pointer`}
        onClick={handlePlay}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/20 rounded-full p-4 group-hover:bg-black/30 transition-colors">
            <Play className="w-8 h-8 text-white fill-current" />
          </div>
        </div>
        
        {video.thumbnailUrl && (
          <img 
            src={video.thumbnailUrl} 
            alt={video.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
        <p className="text-pws-gray text-sm mb-4">{video.description}</p>
        
        <div className="flex items-center text-xs text-pws-gray">
          <Clock className="w-3 h-3 mr-1" />
          <span>{video.duration}</span>
          <span className="mx-2">•</span>
          <span>{video.era}</span>
        </div>
      </CardContent>
    </Card>
  );
}
