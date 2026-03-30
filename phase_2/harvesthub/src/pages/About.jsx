const highlights = [
  {
    name: "Local Market Access",
    icon: "📍",
    desc: "Farmers can reach nearby shops, hotels, and households faster.",
  },
  {
    name: "Direct Buyer Contact",
    icon: "📞",
    desc: "Every listing includes contact details so transactions happen directly.",
  },
  {
    name: "Live Listings",
    icon: "🧺",
    desc: "Available quantity and price are visible to help buyers decide quickly.",
  },
  {
    name: "Simple Tech Stack",
    icon: "💻",
    desc: "Built with React, React Router, Tailwind CSS, and json-server.",
  },
];

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-linear-to-r from-green-800 to-green-600 text-white py-16 px-4 text-center">
        <div className="text-5xl mb-4">🌾</div>
        <h1 className="text-4xl font-bold mb-3">About HarvestHub Market</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          A local produce marketplace that connects farmers directly to buyers.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We built HarvestHub Market to reduce the gap between farms and local demand.
            Farmers can post produce listings with quantity, location, and price, while
            buyers can quickly discover nearby options and contact farmers directly.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">What This Platform Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow"
            >
              <span className="text-4xl">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;
