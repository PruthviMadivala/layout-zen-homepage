
const Stats = () => {
  const stats = [
    { number: "500+", label: "Cups Daily", description: "Served with love" },
    { number: "15", label: "Coffee Varieties", description: "From around the world" },
    { number: "8", label: "Years Serving", description: "The community" },
    { number: "4.9★", label: "Customer Rating", description: "On Google Reviews" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-amber-800 via-orange-700 to-red-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by the community
          </h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Join hundreds of coffee lovers who make Brew & Bean their daily destination.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-amber-100 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-amber-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
