import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/crops", label: "Marketplace" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="bg-green-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <span className="text-2xl">🌾</span>
            <span>HarvestHub Market</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-green-900 text-white"
                      : "text-green-100 hover:bg-green-600 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/crops/add"
              className="ml-3 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold rounded-md transition-colors"
            >
              + Post Listing
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-green-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{menuOpen ? "x" : "="}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-green-800 px-4 pb-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-green-900 text-white"
                    : "text-green-100 hover:bg-green-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/crops/add"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold rounded-md text-center"
          >
            + Post Listing
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
