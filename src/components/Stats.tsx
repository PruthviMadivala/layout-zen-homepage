
const Stats = () => {
  const stats = [
    { number: "2M+", label: "Projects Created", description: "Built by developers worldwide" },
    { number: "150+", label: "Countries", description: "Using our platform daily" },
    { number: "99.99%", label: "Uptime", description: "Reliable infrastructure" },
    { number: "24h", label: "Support", description: "Always here to help" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by developers globally
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Join millions of developers who choose our platform to build their next big thing.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-purple-100 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-purple-200">
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
