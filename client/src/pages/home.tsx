import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Bolt, Handshake, Sprout } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pws-blue to-pws-dark-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Forged in History
                <span className="block text-2xl md:text-3xl font-normal text-blue-200">Since 1945</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                From humble beginnings in a Quonset hut to becoming Northern New England's premier welding supply company, Portland Welding Supply has been serving the industrial community for over 75 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setLocation("/timeline")}
                  className="bg-white text-pws-blue px-8 py-3 hover:bg-blue-50"
                >
                  Explore Timeline
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setLocation("/history")}
                  className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-pws-blue"
                >
                  Read Full History
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="/attached_assets/Screenshot 2025-07-23 202738_1753319349463.png" 
                alt="Portland Welding Supply building with blue awning and company signage" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Founded by Brothers</h2>
            <p className="text-xl text-pws-gray max-w-3xl mx-auto">
              The MacDonald brothers, Clarence Robert and LeRoy John, built Portland Welding Supply on the foundation of hard work, technical expertise, and unwavering dedication to their customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 bg-pws-light-gray">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-pws-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    CR
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">Clarence Robert MacDonald</h3>
                    <p className="text-pws-gray">Co-Founder • "Mac"</p>
                    <p className="text-sm text-pws-gray">April 23, 1902 - February 12, 1975</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The driving force behind PWS, Mac transitioned from shipyard superintendent overseeing 2,000 workers to building a welding supply empire. His sales expertise and vision for growth laid the foundation for the company's success.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 bg-pws-light-gray">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-pws-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    LJ
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">LeRoy John MacDonald</h3>
                    <p className="text-pws-gray">Co-Founder • "Roy"</p>
                    <p className="text-sm text-pws-gray">August 11, 1908 - May 12, 1986</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Known as the best gas welder in the area, Roy handled inside sales, bookkeeping, and technical operations. His expertise in welding and attention to detail ensured PWS maintained the highest quality standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Legacy</h2>
            <p className="text-xl text-pws-gray max-w-3xl mx-auto">
              Built on the principles that guided the MacDonald brothers from day one.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pws-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Bolt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Excellence</h3>
              <p className="text-pws-gray">From expert gas welding to cutting-edge equipment, we've always prioritized technical mastery and quality craftsmanship.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pws-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Partnership</h3>
              <p className="text-pws-gray">Building relationships that last generations, from the shipyards of WWII to today's industrial leaders.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pws-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth & Innovation</h3>
              <p className="text-pws-gray">From a $50 investment to regional leadership, always adapting to serve our community's evolving needs.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
