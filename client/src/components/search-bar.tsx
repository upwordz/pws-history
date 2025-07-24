import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import type { TimelineEntry, StorySubmission } from "@shared/schema";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const { data: searchResults, isLoading } = useQuery<{
    timelineEntries: TimelineEntry[];
    storySubmissions: StorySubmission[];
  }>({
    queryKey: ["/api/search", { q: debouncedQuery }],
    enabled: debouncedQuery.length > 2,
    staleTime: 300000, // 5 minutes
  });

  return (
    <div className="bg-pws-light-gray py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search through PWS history..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pws-blue focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-pws-gray" />
            </div>
            
            {/* Search Results Dropdown */}
            {debouncedQuery.length > 2 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="p-4 text-center text-pws-gray">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-pws-blue mx-auto"></div>
                    <p className="mt-2">Searching...</p>
                  </div>
                ) : searchResults ? (
                  <div className="p-2">
                    {searchResults.timelineEntries.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-pws-gray mb-2 px-2">Timeline Events</h4>
                        {searchResults.timelineEntries.map((entry) => (
                          <div key={entry.id} className="p-2 hover:bg-pws-light-gray rounded cursor-pointer">
                            <div className="font-medium text-sm">{entry.year} - {entry.title}</div>
                            <div className="text-xs text-pws-gray truncate">{entry.description}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {searchResults.storySubmissions.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-pws-gray mb-2 px-2">Stories</h4>
                        {searchResults.storySubmissions.map((story) => (
                          <div key={story.id} className="p-2 hover:bg-pws-light-gray rounded cursor-pointer">
                            <div className="font-medium text-sm">{story.storyTitle}</div>
                            <div className="text-xs text-pws-gray">by {story.name}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {searchResults.timelineEntries.length === 0 && searchResults.storySubmissions.length === 0 && (
                      <div className="p-4 text-center text-pws-gray">
                        No results found for "{debouncedQuery}"
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
