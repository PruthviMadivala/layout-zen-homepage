
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      
      {/* Coffee steam effect */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-sm font-medium">☕ Freshly Roasted Daily</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-amber-200 to-orange-200 bg-clip-text text-transparent">
            Brew & Bean
            <br />
            <span className="text-amber-300">Coffee House</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where every cup tells a story. Experience the perfect blend of artisanal coffee, 
            warm atmosphere, and community connection in the heart of downtown.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-amber-600 text-white hover:bg-amber-700 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              View Menu
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Find Us
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-amber-300 mr-2" />
              </div>
              <div className="text-lg font-semibold text-amber-200">Mon-Fri: 6AM-8PM</div>
              <div className="text-amber-300">Weekends: 7AM-9PM</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-amber-300 mr-2" />
              </div>
              <div className="text-lg font-semibold text-amber-200">Downtown</div>
              <div className="text-amber-300">123 Main Street</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Phone className="h-6 w-6 text-amber-300 mr-2" />
              </div>
              <div className="text-lg font-semibold text-amber-200">Call Us</div>
              <div className="text-amber-300">(555) 123-BREW</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
