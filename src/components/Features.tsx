
import { Card, CardContent } from "@/components/ui/card";
import { LayoutGrid, Zap, Shield, Palette, Code, Users } from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Smart Grid System",
    description: "Intelligent layout grids that adapt to any screen size with pixel-perfect precision.",
    color: "text-purple-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-100ms load times and instant interactions.",
    color: "text-yellow-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with SOC 2 compliance and end-to-end encryption.",
    color: "text-green-500"
  },
  {
    icon: Palette,
    title: "Design System",
    description: "Consistent, beautiful components that scale across your entire product.",
    color: "text-pink-500"
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Clean APIs, comprehensive docs, and tools that developers actually love.",
    color: "text-blue-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration tools that keep your team in perfect sync.",
    color: "text-indigo-500"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to 
            <span className="text-purple-600"> build amazing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to create 
            world-class digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
            >
              <CardContent className="p-8">
                <div className={`inline-flex p-3 rounded-lg bg-gray-100 mb-6`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
