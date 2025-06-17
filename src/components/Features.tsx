
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Leaf, Users, Heart, Clock, Wifi } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Artisan Coffee",
    description: "Single-origin beans roasted in-house daily for the perfect cup every time.",
    color: "text-amber-600"
  },
  {
    icon: Leaf,
    title: "Organic & Fair Trade",
    description: "Ethically sourced coffee that supports farmers and protects the environment.",
    color: "text-green-600"
  },
  {
    icon: Users,
    title: "Community Space",
    description: "A welcoming place where neighbors meet, work, and create lasting memories.",
    color: "text-blue-600"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every drink is crafted by passionate baristas who care about your experience.",
    color: "text-red-500"
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Fast, friendly service without compromising on quality or attention to detail.",
    color: "text-purple-600"
  },
  {
    icon: Wifi,
    title: "Work-Friendly",
    description: "Free Wi-Fi, comfortable seating, and the perfect atmosphere for productivity.",
    color: "text-indigo-600"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose 
            <span className="text-amber-600"> Brew & Bean?</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            More than just coffee - we're your neighborhood gathering place where quality, 
            community, and comfort come together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
            >
              <CardContent className="p-8">
                <div className={`inline-flex p-3 rounded-lg bg-amber-100 mb-6`}>
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
