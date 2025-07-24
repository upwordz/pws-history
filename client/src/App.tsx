import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import SearchBar from "@/components/search-bar";
import Home from "@/pages/home";
import Timeline from "@/pages/timeline";
import History from "@/pages/history";
import Commercials from "@/pages/commercials";
import SubmitStory from "@/pages/submit-story";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SearchBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/history" component={History} />
        <Route path="/commercials" component={Commercials} />
        <Route path="/submit" component={SubmitStory} />
        <Route component={NotFound} />
      </Switch>
      
      {/* Footer */}
      <footer className="bg-pws-dark-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Portland Welding Supply</h3>
              <p className="text-blue-200 mb-4">Preserving our history, celebrating our legacy since 1945.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="/timeline" className="text-blue-200 hover:text-white transition-colors">Timeline</a></li>
                <li><a href="/history" className="text-blue-200 hover:text-white transition-colors">Full History</a></li>
                <li><a href="/commercials" className="text-blue-200 hover:text-white transition-colors">Commercials</a></li>
                <li><a href="/submit" className="text-blue-200 hover:text-white transition-colors">Submit a Story</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-blue-200">
                <p><i className="fas fa-envelope mr-2"></i> history@portlandwelding.com</p>
                <p><i className="fas fa-phone mr-2"></i> (207) 555-0123</p>
                <p><i className="fas fa-map-marker-alt mr-2"></i> Portland, Maine</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Portland Welding Supply History Archive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
