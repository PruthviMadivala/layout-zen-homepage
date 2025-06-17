
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-amber-900 to-orange-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <span className="text-sm font-medium text-white">☕ Come visit us today</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready for the perfect
          <span className="block text-amber-300">cup of coffee?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop by today and discover why Brew & Bean is the neighborhood's favorite coffee destination. 
          We can't wait to serve you!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-amber-600 text-white hover:bg-amber-700 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Get Directions
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Us
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <MapPin className="h-8 w-8 text-amber-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-gray-300">123 Main Street<br />Downtown Coffee District</p>
          </div>
          <div>
            <Clock className="h-8 w-8 text-amber-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Hours</h3>
            <p className="text-gray-300">Mon-Fri: 6AM-8PM<br />Weekends: 7AM-9PM</p>
          </div>
          <div>
            <Phone className="h-8 w-8 text-amber-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
            <p className="text-gray-300">(555) 123-BREW<br />hello@brewandbean.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
