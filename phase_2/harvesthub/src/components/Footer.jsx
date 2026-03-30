import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <span className="text-2xl">🌾</span>
              <span>HarvestHub Market</span>
            </div>
            <p className="text-sm text-green-300 leading-relaxed">
              Connecting local farmers directly to nearby buyers through simple,
              transparent produce listings.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/dashboard", label: "Dashboard" },
                { to: "/crops", label: "Marketplace" },
                { to: "/crops/add", label: "Post Listing" },
                { to: "/about", label: "About" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-green-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Why It Matters</h3>
            <p className="text-sm text-green-300 leading-relaxed">
              Farmers get better access to customers, and buyers get fresher,
              locally sourced produce at fair prices.
            </p>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-6 text-center text-sm text-green-400">
          <p>© {new Date().getFullYear()} HarvestHub Market. Built for local food networks.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
