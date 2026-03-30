import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      icon: "🌾",
      title: "Post Your Produce",
      description: "List your fresh produce with real-time pricing and availability tracking",
    },
    {
      icon: "🤝",
      title: "Connect with Buyers",
      description: "Reach local buyers and establish direct business relationships",
    },
    {
      icon: "📱",
      title: "Easy Management",
      description: "Manage listings, track requests, and communicate with buyers",
    },
    {
      icon: "💰",
      title: "Fair Pricing",
      description: "Set your own prices and eliminate middlemen",
    },
  ];

  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
          *{
            font-family: "Poppins", sans-serif;
          }
          @keyframes rotate {
            100% {
              transform: rotate(1turn);
            }
          }
    
          .rainbow::before {
            content: '';
            position: absolute;
            z-index: -2;
            left: -50%;
            top: -50%;
            width: 200%;
            height: 200%;
            background-position: 100% 50%;
            background-repeat: no-repeat;
            background-size: 50% 30%;
            filter: blur(6px);
            background-image: linear-gradient(to right, #16a34a, #22c55e);
            animation: rotate 4s linear infinite;
          }
        `}
      </style>

      <header className='bg-linear-to-b from-green-900 to-green-800 text-white flex flex-col items-center bg-[url("https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80")] bg-cover bg-center bg-no-repeat pb-10 relative z-0'>
        <div className="absolute inset-0 bg-black/40 z-[-1]"></div>

        <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-px flex items-center justify-center rounded-full transition duration-300 active:scale-100 mt-28 md:mt-32">
          <button className="flex items-center justify-center gap-3 pl-4 pr-6 py-3 text-white rounded-full font-medium bg-green-900/80 backdrop-blur">
            <div className="relative flex size-3.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
              <span className="relative inline-flex size-2 rounded-full bg-green-400"></span>
            </div>
            <span className="text-xs">Supporting Local Farmers & Sustainable Trade</span>
          </button>
        </div>

        <h1 className="text-4xl md:text-6xl text-center max-w-4xl mt-5 font-bold leading-tight px-4">
          Connect Farmers to <span className="text-green-300">Local Buyers</span>
        </h1>
        <p className="text-sm md:text-base text-green-100 text-center max-w-2xl mt-4 px-4 leading-relaxed">
          A direct marketplace platform that empowers farmers to sell fresh produce directly to local buyers—no middlemen, fair prices, real connections.
        </p>

        <div className="flex gap-3 mt-8 flex-wrap justify-center">
          <Link
            to="/crops"
            className="bg-green-400 hover:bg-green-300 text-green-900 px-8 py-3 rounded-full text-sm font-semibold transition cursor-pointer shadow-lg hover:shadow-xl"
          >
            Browse Listings
          </Link>
          <Link
            to="/crops/add"
            className="px-8 text-sm py-3 text-white rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition border border-white/40 font-semibold"
          >
            Post Your Produce
          </Link>
        </div>

        <div className="w-full mt-20 px-4 pb-10 relative z-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-center text-green-200 mb-8 font-semibold">
              TRUSTED BY FARMERS ACROSS THE REGION
            </p>
            <div className="flex flex-row items-center justify-center gap-8 md:gap-20 flex-wrap">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-300">50+</div>
                <div className="text-xs text-green-100 mt-2">Fresh Listings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-300">20+</div>
                <div className="text-xs text-green-100 mt-2">Active Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-300">15+</div>
                <div className="text-xs text-green-100 mt-2">Daily Requests</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-300">5</div>
                <div className="text-xs text-green-100 mt-2">Districts Covered</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-3 mt-12 px-4 animate-bounce cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 9A7 7 0 1 0 5 9v6a7 7 0 1 0 14 0zm-7-3v4"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-xs text-white/60">Scroll to explore</p>
        </div>
      </header>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why HarvestHub Market?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building a direct connection between farmers and buyers, ensuring fair prices and fresh quality without intermediaries.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-linear-to-br from-green-50 to-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-300"
              >
                <p className="text-5xl mb-4">{feature.icon}</p>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
