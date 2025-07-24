import { useState } from "react";
import { ChevronDown, Star, Users, Building, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { TimelineEntry } from "@shared/schema";

interface TimelineEntryProps {
  entry: TimelineEntry;
  index: number;
}

const getIconForTags = (tags: string[] = []) => {
  if (tags.includes("founding")) return Star;
  if (tags.includes("key-hire") || tags.includes("leadership")) return Users;
  if (tags.includes("expansion") || tags.includes("permanent-location")) return Building;
  return Zap;
};

const getColorForYear = (year: number) => {
  if (year < 1950) return "from-pws-blue to-pws-dark-blue";
  if (year < 1960) return "from-pws-light-blue to-pws-blue";
  if (year < 1980) return "from-blue-500 to-pws-light-blue";
  return "from-gray-600 to-gray-800";
};

export default function TimelineEntryComponent({ entry, index }: TimelineEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;
  const IconComponent = getIconForTags(entry.tags);
  const gradientClass = getColorForYear(entry.year);

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center">
      {/* Timeline marker */}
      <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br ${gradientClass} rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10`}>
        <IconComponent className="w-3 h-3 text-white" />
      </div>

      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
        <Card 
          className="hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <CardContent className="p-6">
            <div className={`flex ${isEven ? "md:flex-row-reverse" : ""} justify-between items-center mb-3`}>
              <Badge variant="secondary" className="bg-pws-blue text-white">
                {entry.year}
              </Badge>
              <ChevronDown 
                className={`h-4 w-4 text-pws-gray transform transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`} 
              />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{entry.title}</h3>
            <p className="text-pws-gray">{entry.description}</p>
            
            {isExpanded && entry.details && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-700 mb-3 leading-relaxed">{entry.details}</p>
                
                {entry.tags && entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {entry.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag.replace("-", " ")}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
