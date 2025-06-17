
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Sparkles className="h-4 w-4 text-purple-300 mr-2" />
          <span className="text-sm font-medium text-white">Join 50,000+ developers</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to build something
          <span className="block text-purple-300">amazing?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Start your journey today with our free plan. No credit card required, 
          no setup fees, just pure creative freedom.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
          >
            Schedule Demo
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-gray-400">
          Free forever • No credit card required • 5-minute setup
        </div>
      </div>
    </section>
  );
};

export default CTA;
